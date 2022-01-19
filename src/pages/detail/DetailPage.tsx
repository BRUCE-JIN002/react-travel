import React from "react";
import { RouteComponentProps, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { Spin, Row, Col } from "antd";
import styles from "./DetailPage.module.css";
import { Header, Footer, ProductIntro } from "../../components";
import { DatePicker, Space } from "antd";

const { RangePicker } = DatePicker;

interface MatchParams {
  touristRouteId: string;
}

export const DetailPage: React.FC<RouteComponentProps<MatchParams>> = (
) => {
  const { touristRouteId } = useParams<MatchParams>();
  const [loading, setLoading] = useState<boolean>(true);
  const [product, setProduct] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async() => {
      setLoading(true);
      try {
        const { data } = await axios.get(
          "http://123.56.149.216:8080/api/touristRoutes/${touristRouteId}"
        );
        setProduct(data);
        setLoading(false);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        }
        setLoading(false);
      }
    }
    fetchData();
  }, [])
  if (loading) {
    return (
      <Spin
        size="large"
        style = {{
          marginTop: 200,
          marginBottom: 200,
          marginLeft: "auto",
          marginRight: "auto",
          width: "100%",
        }}
      />
    );
  }
  return <>
    <Header/>
    <div className={styles["page-content"]}>
      {/* 产品简介与日期选择 */}
      <div className={styles["product-intro-container"]}>
        <Row>
          <Col span={13}>
            <ProductIntro 
              title={product.title}
              shortDescription={product.description} 
              price={product.originalPrice} 
              coupons={product.coupons} 
              points={product.points} 
              discount={product.price} 
              rating={product.rating} 
              pictures={[product.touristRoutePictures.map((p) => p.url)]}              
            />
          </Col>
          <Col span={11}>
            <RangePicker open style={{marginTop: 20}}/>
          </Col>
        </Row>
      </div>
      {/* 锚点菜单 */}
      <div className={styles["product-detail-anchor"]}></div>
      {/* 产品特色 */}
      <div id="feature" className={styles["product-detail-container"]}></div>
      {/* 产品费用 */}
      <div id="fees" className={styles["product-detail-container"]}></div>
      {/* 预定须知 */}
      <div id="notes" className={styles["product-detail-container"]}></div>
      {/* 产品评价 */}
      <div id="comments" className={styles["product-detail-container"]}></div>
    </div>
    <Footer/>
  </>
};