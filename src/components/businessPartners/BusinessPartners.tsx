import React from "react";
import styles from "./BusinessPartners.module.css";
import { Row, Col, Typography, Divider } from "antd";

import image1 from '../../assets/image/microsoft-80658_640.png';
import image2 from '../../assets/image/icon-720944_640.png';
import image3 from '../../assets/image/follow-826033_640.png';
import image4 from '../../assets/image/facebook-807588_640.png';


const companies = [
    {src: image1, title: "Microsoft"},
    {src: image2, title: "Youtube"},
    {src: image3, title: "Ins"},
    {src: image4, title: "Facebook"}
]

export const BusinessPartners: React.FC = (props) => {
    return (
        <div className={styles["content"]}>
            <Divider orientation="left">
                <Typography.Title level={3}>企业合作</Typography.Title>
            </Divider>
            <Row>
                {companies.map((c, index) => (
                    <Col span={6} key={"business-partner-" + index}>
                        <img
                            alt="bussiness-partner"
                            src={c.src}
                            style={{
                                width: "80%",
                                display: "block",
                                marginLeft: "auto",
                                marginRight: "auto"
                            }}  
                        />
                    </Col>
                ))}
            </Row>
        </div>
    );
        
};