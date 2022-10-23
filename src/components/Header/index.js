import React from 'react'
import {Button, PageHeader} from 'antd';
import "./style.css";
import {HomeOutlined} from '@ant-design/icons';

export default function Header() {

    return (
        <div id={'site-page-header-ghost-wrapper'}>

            <PageHeader
                style={{backgroundColor: '#0c5c84'}}
                ghost={true}
                onBack={() => window.history.back()}
            >
                <div>
                    <HomeOutlined id={'home'}/>
                    <h2> Título teste </h2>
                </div>

                <div className="header">
                    <Button id={'btn-3'} key="3">Operation</Button>
                    <Button key="2">Operation</Button>
                    <Button key="1" type="primary">
                        Primary
                    </Button>
                </div>
            </PageHeader>
        </div>

    )
}