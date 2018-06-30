import * as React from "react";
import * as ReactPaginate from "react-paginate";

import { getImageGallery } from "./api";
import { H1, Header, PaginationWrapper } from "./AppStyles";
import { A } from "./common/A";
import Buttons from "./components/Buttons";
import Gallery from "./components/Gallery";

interface IAppState {
  images: any[];
  limit: number;
  error: boolean;
  totalCount: number;
  pageCount: number;
  loading: boolean;
  offset: number;
}

class App extends React.Component<{}, IAppState> {
  state = {
    error: false,
    images: [],
    limit: 20,
    loading: false,
    offset: 0,
    pageCount: 0,
    totalCount: 0
  };

  handleChangeNumImg = (numOfImg: number) => {
    this.setState({
      limit: numOfImg
    });
  };

  loadImage = async () => {
    try {
      const { limit, offset } = this.state;
      const option = {
        limit,
        offset
      };
      const {
        data: images,
        pagination: { total_count: total }
      } = await getImageGallery(option);

      const totalCount = this.state.totalCount || total;

      const pageCount = Math.ceil(totalCount / limit);
      this.setState({
        images,
        pageCount,
        totalCount
      });
    } catch (error) {
      alert(error);
    }
  };

  componentDidMount() {
    this.loadImage();
  }

  componentDidUpdate(_: any, previousState: IAppState) {
    if (this.state.limit !== previousState.limit) {
      this.loadImage();
    }
  }

  handlePageClick = ({ selected }: { selected: number }) => {
    const offset = Math.ceil(selected * this.state.limit);

    this.setState({ offset }, () => {
      this.loadImage();
    });
  };

  public render() {
    const { limit, images, pageCount } = this.state;
    return (
      <React.Fragment>
        <Header>
          <A href="https://github.com/willnguyen1312/senior-test-message-media">
            <H1>MessageMedia Senior Test</H1>
          </A>
        </Header>
        <PaginationWrapper>
          {pageCount ? (
            <ReactPaginate
              previousLabel={"previous"}
              nextLabel={"next"}
              breakLabel={<span>...</span>}
              pageCount={pageCount}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={this.handlePageClick}
              containerClassName={"pagination"}
              activeClassName={"active"}
            />
          ) : null}
        </PaginationWrapper>

        <Buttons handleChangeNumImg={this.handleChangeNumImg} count={limit} />
        <Gallery images={images} />
      </React.Fragment>
    );
  }
}

export default App;
