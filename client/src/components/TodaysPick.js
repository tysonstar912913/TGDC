import Carousel from 'react-multi-carousel';
import { Row, Col } from 'react-bootstrap'
import AuctionItem from "./AuctionItem";

import icon_category from '../assets/img/icon_category.png'
import sale_type from '../assets/img/sale_type.png'
import price_range from '../assets/img/price_range.png'
import blockchain_icon from '../assets/img/blockchain_icon.png'

import { TODAY_PICKS_LIST } from "../config/constants";

const picks_responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1321 },
    items: 4
  },
  desktop: {
    breakpoint: { max: 1320, min: 1025 },
    items: 3,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 601 },
    items: 2,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const CustomLeftArrow = ({ onClick, ...rest }) => {
  return <button className='carousel_left_arrow' onClick={() => onClick()}><i className="arrow left"></i></button>;
};
const CustomRightArrow = ({ onClick, ...rest }) => {
  return <button className='carousel_right_arrow' onClick={() => onClick()}><i className="arrow right"></i></button>;
};

// const SliderItemList = ({ dataList }) => {
//   console.log(dataList, 'item_list')
//   let slider_items = [];
//   for (let i = 0; i < dataList.length; i += 2) {
//     slider_items.push(<div className="slider_item" key={i}><AuctionItem data={dataList[i]} /><AuctionItem data={dataList[i + 1]} className="mt-20" /></div>);
//     console.log('slider_items', slider_items)
//   }
//   // return (
//   //   {slider_items}
//   // );
//   return slider_items;
// }

const TodaysPick = ({ children }) => {
  let dataList = TODAY_PICKS_LIST;
  let slider_items = [];
  for (let i = 0; i < dataList.length; i += 2) {
    slider_items.push(<div className="slider_item" key={i}><AuctionItem data={dataList[i]} /><AuctionItem data={dataList[i + 1]} className="mt-20" /></div>);
    console.log('slider_items', slider_items)
  }
  return (
    <section className='top_sellers'>
      <Row>
        <Col md={12}>
          <h2 className='content_title plr-10'>Today's Picks</h2>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <div className="picks_btn_group plr-10">
            <button className='criteria_btn'><img alt='' src={icon_category} />&nbsp;&nbsp;Category</button>
            <button className='criteria_btn'><img alt='' src={price_range} />&nbsp;&nbsp;Price range</button>
            <button className='criteria_btn'><img alt='' src={sale_type} />&nbsp;&nbsp;Sale type</button>
            <button className='criteria_btn'><img alt='' src={blockchain_icon} />&nbsp;&nbsp;Blockchain</button>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <div className='carousel_wrapper'>
            <Carousel
              swipeable={false}
              draggable={false}
              showDots={false}
              responsive={picks_responsive}
              ssr={true} // means to render carousel on server-side.
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={50000}
              keyBoardControl={true}
              customTransition="all .8"
              transitionDuration={500}
              containerClass="carousel-container"
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-20-px plr-10"
              className="latest_nfts_carousel"
              customLeftArrow={<CustomLeftArrow />}
              customRightArrow={<CustomRightArrow />}
            >
              {/* {TODAY_PICKS_LIST.map((item, index) => {
                return (
                  <>
                    <div className="slider_item" key={index}>
                      <AuctionItem data={item} />
                      <AuctionItem className="mt-20" />
                    </div>
                  </>
                )
              })} */}
              {/* <SliderItemList dataList={TODAY_PICKS_LIST} /> */}
              {slider_items}
            </Carousel>
          </div>
        </Col>
      </Row>
    </section>
  )
}

export default TodaysPick;