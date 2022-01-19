const baseUrl = process.env.REACT_APP_YOUTUBE_URL;

class Youtube {
  constructor(key) {
    this.key = key;
    this.getRequestOptions = {
      method: "GET",
      redirect: "follow"
    };
  }

  async searchMostPopular(pageToken) {
    const appendUrl = pageToken ? `&pageToken=${pageToken}` : "";
    return fetch(
      `${baseUrl}videos?part=snippet&chart=mostPopular&maxResults=24&key=${this.key}${appendUrl}`,
      this.getRequestOptions
    )
      .then(response => response.json())
      .then(result => {
        const { nextPageToken, items } = result;
        return { nextPageToken: nextPageToken, videos: items };
      });
  }

  async searchVideos(word, pageToken) {
    const appendUrl = pageToken ? `&pageToken=${pageToken}` : "";
    return fetch(
      `${baseUrl}search?part=snippet&maxResults=24&q=${word}&key=${this.key}${appendUrl}`,
      this.getRequestOptions
    )
      .then(response => response.json())
      .then(result => {
        const { nextPageToken, items } = result;
        const videos = items.map(item => ({ ...item, id: item.id.videoId }));

        return {
          nextPageToken,
          videos
        };
      });
  }
}

export default Youtube;
