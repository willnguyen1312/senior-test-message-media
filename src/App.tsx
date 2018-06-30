import * as React from "react";

import { getImageGallery } from "./api";
import { H1, Header } from "./AppStyles";
import { A } from "./common/A";
import Buttons from "./components/Buttons";
import Gallery from "./components/Gallery";

interface IAppState {
  images: any[];
  count: number;
  error: boolean;
  loading: boolean;
  offset: number;
}

class App extends React.Component<{}, IAppState> {
  state = {
    count: 20,
    error: false,
    images: [],
    loading: false,
    offset: 0
  };

  handleChangeNumImg = (numOfImg: number) => {
    this.setState({
      count: numOfImg
    });
  };

  loadImage = async () => {
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
  };

  componentDidMount() {
    this.loadImage();
  }

  componentDidUpdate(_: any, previousState: IAppState) {
    if (this.state.count !== previousState.count) {
      this.loadImage();
    }
  }

  public render() {
    const { count, images } = this.state;
    return (
      <React.Fragment>
        <Header>
          <A href="https://github.com/willnguyen1312/senior-test-message-media">
            <H1>MessageMedia Senior Test</H1>
          </A>
        </Header>
        <Buttons handleChangeNumImg={this.handleChangeNumImg} count={count} />
        <Gallery images={images} />
      </React.Fragment>
    );
  }
}

export default App;
