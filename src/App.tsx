import * as React from "react";

import { getImageGallery } from "./api";
import { H1, Header } from "./AppStyles";
import { A } from "./common/A";
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
          <A href="https://github.com/willnguyen1312/senior-test-message-media">
            <H1>MessageMedia Senior Test</H1>
          </A>
        </Header>
        <Gallery images={images} />
      </React.Fragment>
    );
  }
}

export default App;
