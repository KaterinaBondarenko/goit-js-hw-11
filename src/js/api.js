import axios from 'axios';

const API_KEY = '24465009-c19d13b3d7a0e5b95e4231612';

export class ImagesApi {
  constructor() {
    this.searchImages = '';
    this.page = 1;
    this.perPage = 40;
  }
  async fetchImages() {
    try {
      axios.defaults.baseURL = 'https://pixabay.com/api';
      const response = await axios.get(
        `/?key=${API_KEY}&q=${this.searchImages}&image_type=photo&orientation=horizontal&safesearch=true&page=${this.page}&per_page=${this.perPage}`,
      );
      const data = await response.data;
      this.incrementPage();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
  incrementPage() {
    this.page += 1;
  }
  resetPage() {
    this.page = 1;
  }
  get search() {
    return this.searchImages;
  }
  set search(newSearchImages) {
    this.searchImages = newSearchImages;
  }
}
