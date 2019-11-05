import styled from 'styled-components';
export const PageWrap = styled.div`
    .wrap{
        max-width: 980px;
        margin: 0 auto;
        .antd_col{
            ovflow: hidden;
        }
    }
    .headerDivider{
        height: 24px;
        margin: 20px 0px;
        float: left;
    }
    .headernav{
        float: left;
        line-height: 62px;
        background: none;
        border: none;
        margin-left: 30px;
        .ant-menu-item a{
            color:#fff;
        }
        .ant-menu-item-selected a{
            color: #1890ff;
        }
    }

    .minnav{
        position: absolute;
        top: 0;
        right: 0;
        width: auto;
    }
`
export const H = styled.h1`
    color: #fff;
    margin-bottom: 0;
    text-align: center;

`
export const Main =  styled.div`
    flex: 1;
    // height: 500px;
    

`