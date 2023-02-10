import React from 'react';
import ContentWrapper from '../components/ContentWrapper';
import { Col, Row } from 'antd';
import Title from 'antd/lib/typography/Title';
import ResistStep from './ResistStep';
import CategoryAndBrand from './CategoryAndBrand';

type ResisterItemCardProps = {};

const ResistItemCard = (props: ResisterItemCardProps) => {
    return (
        <ContentWrapper>
            <Row gutter={24} style={{ border: '1px solid pink' }} align={'top'}>
                <Col span={6} style={{ border: '1px solid green' }}>
                    <Title
                        level={2}
                        style={{
                            fontWeight: 700,
                            marginTop: 0,
                            marginBottom: 110,
                        }}
                    >
                        등록하기
                    </Title>
                    <ResistStep />
                </Col>
                <Col span={18}>
                    <Row gutter={24} align={'top'} justify={'space-between'}>
                        <Col span={19}>
                            <Title level={4} style={{ marginTop: 0, marginBottom: 56 }}>
                                카테고리 & 브랜드 선택
                            </Title>
                            <CategoryAndBrand />
                        </Col>
                        <Col span={5} style={{ textAlign: 'end' }}>
                            <img src="/img/ic_close.png" alt="닫기" width={43} />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </ContentWrapper>
    );
};

export default ResistItemCard;
