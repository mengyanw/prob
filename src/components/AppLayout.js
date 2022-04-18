import React from "react";
import { Layout } from "antd";
import MusicPlayer from "./MusicPlayer";
const { Header, Content, Footer} = Layout;

const AppLayout = () => {
  return (
    <Layout>
      <Header style={{ backgroundColor: "white",fontSize: "32px"}}>PROB</Header>
      <Layout className="site-layout">
        <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, textAlign: "center" }}
          >
            <MusicPlayer />
          </div>
        </Content>
      </Layout>
      <Footer style={{ textAlign: "center" }}>
         © Designed & Coded by Mengyan Wu
      </Footer>
    </Layout>
  );
};

export default AppLayout;
