import React from "react";
import { Breadcrumb, Col, Pagination, Row,Card, Button  } from "react-bootstrap";
import Link from "next/link";
import { useDispatch } from 'react-redux';
import { ADD, Delete } from '../../../../shared/redux/actions/action';
import ProductService from "../../../../shared/services/ProductService";
import Seo from "@/shared/layout-components/seo/seo";

const Wishlist = () => {
  const [list, setList] = React.useState({
    InitialList:ProductService.getProductList()
  });

function handleRemove(id) {
  console.log(list);
 const newList = list.InitialList.filter((list) => list.id !== id);
 setList({InitialList:newList});
}
let {InitialList}= list;
  const dispatch = useDispatch();
  const send = (e) => {
    // console.log(e);
    dispatch(ADD(e)); 
  }
  const ondelete = (item) => {
    dispatch(Delete(item))
  }

  return (
    <div>
      <Seo title={"Wish list"}/>

      {/* <!-- breadcrumb --> */}
      <div className="breadcrumb-header justify-content-between">
        <div className="left-content">
          <span className="main-content-title mg-b-0 mg-b-lg-1">WISH LIST</span>
        </div>
        <div className="justify-content-center mt-2">
          <Breadcrumb className="breadcrumb">
            <Breadcrumb.Item className="breadcrumb-item tx-15" href="#!">
              Ecommerce
            </Breadcrumb.Item>
            <Breadcrumb.Item
              className="breadcrumb-item "
              active
              aria-current="page"
            >
              Wish-list
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>
      {/* <!-- /breadcrumb --> */}

      {/* <!-- ROW-1 OPEN --> */}
      <Col className="p-0" lg={12} xl={12}>
        <Row className="row">
          {InitialList.map((item) => (
            <Col xl={3} lg={6} md={4} className="alert" key={item.id}>
              <Card className=" item-card ">
                <Card.Body className="pb-0">
                  <div className="text-center zoom">
                    <Link href={`/components/pages/e-commerce/shop/`}>
                      <img className="w-100 br-5" src={item.src} alt="img" />
                    </Link>
                  </div>
                  <Card.Body className=" px-0 pb-3">
                    <Row>
                      <div className="col-8">
                        <div className="cardtitle">
                          <div>
                            <Link href="#!">
                              <i className="fa fa-star text-warning fs-16"></i>
                            </Link>
                            <Link href="#!">
                              <i className="fa fa-star text-warning fs-16"></i>
                            </Link>
                            <Link href="#!">
                              <i className="fa fa-star text-warning fs-16"></i>
                            </Link>
                            <Link href="#!">
                              <i className="fa fa-star-half text-warning fs-16"></i>
                            </Link>
                            <Link href="#!">
                              <i className="fa fa-star-o text-warning fs-16"></i>
                            </Link>
                            <Link href="#!"> {item.num}</Link>
                          </div>
                          <Link href="#!" className="shop-title fs-18">
                            {item.name}
                          </Link>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="cardprice-2">
                          <span className="type--strikethrough number-font">
                            {item.disc}
                          </span>
                          <span className="number-font">{item.prices}</span>
                        </div>
                      </div>
                      <div>
                        <p className="shop-description fs-13 text-muted mt-2 mb-0">
                          {item.text}
                        </p>
                      </div>
                    </Row>
                  </Card.Body>
                </Card.Body>
                <Card.Footer className=" text-center">
                  <div className="text-center ps-2 pe-2">
                    <Button variant=""
                      className="btn btn-md btn-primary mb-2 ms-2 w-45 "
                      onClick={() => send(item)}
                    >
                      <Link href={`/components/pages/e-commerce/cart/`} className="text-white">
                        <i className="fe fe-shopping-cart me-1"></i>{' '}Add to Cart
                      </Link>
                    </Button>
                    <Link
                      href="#!"
                      className="btn btn-md btn-light mb-2 ms-2 w-45"
                      data-bs-dismiss="alert"
                      aria-label="Close"
                      onClick={() =>{ondelete(item.item); handleRemove(item.id)}}
                    >
                      <span className="me-2 fs-14">Remove</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="16px"
                        viewBox="0 0 24 24"
                        width="16px"
                        fill="#495057"
                      >
                        <path d="M0 0h24v24H0V0z" fill="none" />
                        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
                      </svg>
                    </Link>
                  </div>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
        <div className="d-flex justify-content-end">
          <Pagination className="pagination mb-5">
            <Pagination.Item className="disabled page-item">‹</Pagination.Item>
            <Pagination.Item className="active page-item">1</Pagination.Item>
            <Pagination.Item className="page-item">2</Pagination.Item>
            <Pagination.Item className="page-item">3</Pagination.Item>
            <Pagination.Item className="page-item">4</Pagination.Item>
            <Pagination.Item className="page-item">5</Pagination.Item>
            <Pagination.Item className="page-item">›</Pagination.Item>
          </Pagination>
        </div>
      </Col>
      {/* <!-- COL-END --> */}
    </div>
  );
}

Wishlist.propTypes = {};

Wishlist.defaultProps = {};

Wishlist.layout = "Contentlayout"

export default Wishlist;
