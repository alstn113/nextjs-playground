import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isDropMenuOpen, setIsDropMenuOpen] = useState<boolean>(false);
  const [isMegaBoxOpen, setIsMegaBoxOpen] = useState<boolean>(false);
  return (
    <Nav>
      <Wrapper>
        <Logo>
          <Link href={`/`}>
            <a>MINSOO</a>
          </Link>
        </Logo>
        <NavLinks isMenuOpen={isMenuOpen}>
          <CloseBtb
            isMenuOpen={isMenuOpen}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            CLOSE
          </CloseBtb>
          <li>
            <Link href={`/`}>
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href={`/test`}>
              <a>About</a>
            </Link>
          </li>
          <li>
            <button className="desktop-item">Dropdown Menu</button>
            <button
              className="mobile-item"
              onClick={() => setIsDropMenuOpen(!isDropMenuOpen)}
            >
              Dropdown Menu
            </button>
            <DropMenu isDropMenuOpen={isDropMenuOpen} className="drop-menu">
              <li>
                <Link href={`/auth/test`}>
                  <a>Menu 1</a>
                </Link>
              </li>
              <li>
                <Link href={`/auth/signup`}>
                  <a>SIGN UP</a>
                </Link>
              </li>
              <li>
                <Link href={`/auth/login`}>
                  <a>LOGIN</a>
                </Link>
              </li>
              <li>
                <Link href={`/auth/test`}>
                  <a>test</a>
                </Link>
              </li>
            </DropMenu>
          </li>
          <li>
            <button className="desktop-item">Mega Menu</button>
            <button
              className="mobile-item"
              onClick={() => setIsMegaBoxOpen(!isMegaBoxOpen)}
            >
              Mega Menu
            </button>
            <MegaBox isMegaBoxOpen={isMegaBoxOpen} className="mega-box">
              <Content>
                <Row>
                  <div className="image-container">
                    <Image
                      src={'/assets/cat.jpg'}
                      height={100}
                      width={100}
                      layout="responsive"
                      alt="고양이"
                    />
                  </div>
                </Row>
                <Row>
                  <header>TEST PAGE</header>
                  <ul>
                    <li>
                      <Link href={`/product`}>
                        <a>Product</a>
                      </Link>
                    </li>
                    <li>
                      <Link href={`/`}>
                        <a>Counter</a>
                      </Link>
                    </li>
                    <li>
                      <Link href={`/`}>
                        <a>ImageUpload</a>
                      </Link>
                    </li>
                    <li>
                      <Link href={`/`}>
                        <a>UI-Test</a>
                      </Link>
                    </li>
                  </ul>
                </Row>
                <Row>
                  <header>Email Services</header>
                  <ul>
                    <li>
                      <Link href={`/`}>
                        <a>Personal Email</a>
                      </Link>
                    </li>
                    <li>
                      <Link href={`/`}>
                        <a>Business Email</a>
                      </Link>
                    </li>
                    <li>
                      <Link href={`/`}>
                        <a>Mobile Email</a>
                      </Link>
                    </li>
                    <li>
                      <Link href={`/`}>
                        <a>Web Marketing</a>
                      </Link>
                    </li>
                  </ul>
                </Row>
                <Row>
                  <header>Security services</header>
                  <ul>
                    <li>
                      <Link href={`/`}>
                        <a>Site Seal</a>
                      </Link>
                    </li>
                    <li>
                      <Link href={`/`}>
                        <a>VPS Hosting</a>
                      </Link>
                    </li>
                    <li>
                      <Link href={`/`}>
                        <a>Privacy Seal</a>
                      </Link>
                    </li>
                    <li>
                      <Link href={`/`}>
                        <a>Website design</a>
                      </Link>
                    </li>
                  </ul>
                </Row>
              </Content>
            </MegaBox>
          </li>
          <li>
            <Link href={`/test`}>
              <a>Feedback</a>
            </Link>
          </li>
        </NavLinks>
        <MenuBtn
          isMenuOpen={isMenuOpen}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          MENU
        </MenuBtn>
      </Wrapper>
    </Nav>
  );
}

const Nav = styled('nav')`
  * {
    font-family: Montserrat;
  }
  position: fixed;
  z-index: 100;
  background: #242526;
  width: 100%;
`;

const Wrapper = styled('div')`
  position: relative;
  max-width: 1300px;
  padding: 0 30px;
  height: 70px;
  line-height: 70px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled('div')`
  a {
    color: #f2f2f2;
    font-size: 30px;
    font-weight: 600;
    text-decoration: none;
  }
`;

const NavLinks = styled('ul')<{ isMenuOpen: boolean }>`
  .mobile-item {
    display: none;
  }
  display: inline-flex;
  li {
    list-style: none;
    &:hover .drop-menu,
    &:hover .mega-box {
      transition: all 0.3s ease;
      opacity: 1;
      visibility: visible;
    }
    a,
    button {
      color: white;
      text-decoration: none;
      font-size: 18px;
      font-weight: 500;
      padding: 9px 15px;
      border-radius: 5px;
      transition: all 0.3s ease;
      &:hover {
        background: #3a3b3c;
      }
    }
  }
  ${({ theme }) => theme.media.custom(970)} {
    .desktop-item {
      display: none;
    }
    .mobile-item {
      display: block;
      font-size: 20px;
      padding-left: 20px;
    }
    position: fixed;
    height: 100vh;
    width: 100%;
    max-width: 350px;
    top: 0;
    left: -100%;
    background: #242526;
    display: block;
    padding: 50px 10px;
    line-height: 50px;
    overflow-y: auto;
    box-shadow: 0px 15px 15px rgba(0, 0, 0, 0.18);
    transition: all 0.3s ease;
    li {
      margin: 15px 10px;
      a {
        display: block;
        padding: 0 20px;
        font-size: 20px;
      }
      button {
        padding: 0 20px;
        font-size: 20px;
        line-height: 50px;
        width: 100%;
        text-align: left;
      }
    }
    ${({ isMenuOpen }) =>
      isMenuOpen &&
      css`
        left: 0%;
      `}
  }
`;

const DropMenu = styled('ul')<{ isDropMenuOpen: boolean }>`
  position: absolute;
  background: #242526;
  width: 180px;
  line-height: 45px;
  top: 70px;
  opacity: 0;
  visibility: hidden;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
  li a {
    width: 100%;
    display: block;
    padding: 0 0 0 15px;
    font-weight: 400;
    border-radius: 0px;
  }
  ${({ theme }) => theme.media.mobile} {
    position: static;
    opacity: 1;
    top: 65px;
    visibility: visible;
    padding-left: 20px;
    width: 100%;
    overflow-y: hidden;
    box-shadow: none;
    display: none;
    li {
      margin: 0;
      a {
        border-radius: 5px;
        font-size: 18px;
      }
    }
    ${({ isDropMenuOpen }) =>
      isDropMenuOpen &&
      css`
        display: block;
      `}
  }
`;

const MegaBox = styled('div')<{ isMegaBoxOpen: boolean }>`
  position: absolute;
  top: 70px;
  left: 0;
  width: 100%;
  padding: 0 30px;
  opacity: 0;
  visibility: hidden;
  ${({ theme }) => theme.media.mobile} {
    position: static;
    top: 65px;
    opacity: 1;
    visibility: visible;
    padding: 0 20px;
    overflow: hidden;
    display: none
      ${({ isMegaBoxOpen }) =>
        isMegaBoxOpen &&
        css`
          display: block;
        `};
  }
`;

const Content = styled('div')`
  background: #242526;
  padding: 25px 20px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
  ${({ theme }) => theme.media.mobile} {
    box-shadow: none;
    flex-direction: column;
    padding: 20px 20px 0 20px;
  }
`;

const Row = styled('div')`
  width: calc(25% - 30px);
  line-height: 45px;
  header {
    color: #f2f2f2;
    font-size: 20px;
    font-weight: 500;
  }
  .image-container {
    padding: 20px;
  }

  ul {
    margin: 0 0 0 -40px;
    border-left: 1px solid rgba(255, 255, 255, 0.09);
    li {
      padding: 0 20px;
      a {
        padding: 0 20px;
        color: #d9d9d9;
        font-size: 17px;
        display: block;
        &:hover {
          color: #f2f2f2;
        }
      }
    }
  }
  ${({ theme }) => theme.media.mobile} {
    width: 100%;
    margin-bottom: 15px;
    border-top: 1px solid rgba(255, 255, 255, 0.08);
    &:nth-of-type(1),
    &:nth-of-type(1) {
      border-top: 0px;
    }
    ul {
      border-left: 0px;
      padding-left: 15px;
    }
    li {
      margin: 0px;
    }
    header {
      font-size: 19px;
    }
    .image-container {
      padding: 0;
    }
  }
`;
const MenuBtn = styled('button')<{ isMenuOpen: boolean }>`
  display: none;
  color: #fff;
  font-size: 20px;
  ${({ theme }) => theme.media.mobile} {
    display: block;
    ${({ isMenuOpen }) =>
      isMenuOpen &&
      css`
        display: none;
      `}
  }
`;
const CloseBtb = styled('button')<{ isMenuOpen: boolean }>`
  position: absolute;
  right: 30px;
  top: 30px;
  display: none;
  color: #fff;
  font-size: 20px;
  ${({ theme }) => theme.media.mobile} {
    ${({ isMenuOpen }) =>
      isMenuOpen &&
      css`
        display: block;
      `}
  }
`;
