import * as React from "react";

import { getImageGallery } from "./api";
import { H1, Header } from "./AppStyles";
import Gallery from "./components/Gallery";

interface IAppState {
  images: any[];
}

class App extends React.Component<{}, IAppState> {
  state = {
    count: 20,
    error: false,
    images: [],
    loading: false,
    offset: 0
  };

  async componentDidMount() {
    try {
      const { count, offset } = this.state;
      const option = {
        count,
        offset
      };
      const { data: images } = await getImageGallery(option);
      // tslint:disable-next-line:no-console
      this.setState({
        images
      });
    } catch (error) {
      alert(error);
    }
  }

  public render() {
    const { images } = this.state;
    return (
      <React.Fragment>
        <Header>
          <H1>MessageMedia Senior Test</H1>
        </Header>
        <Gallery images={images} />
      </React.Fragment>
    );
  }
}

export default App;
