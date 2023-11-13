import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookBookmark,
  faCircleQuestion,
  faCoins,
  faEarthAsia,
  faEllipsisVertical,
  faGear,
  faKeyboard,
  faLightbulb,
  faMoon,
  faPlus,
  faRightFromBracket,
  faSignIn,
} from "@fortawesome/free-solid-svg-icons";
import images from "../../../assets/images";
import styles from "./Header.module.scss";
import Tippy from "@tippyjs/react";

import Button from "../../../components/Button";

import Menu from "../../../components/Popper/Menu";
import "tippy.js/dist/tippy.css";
import { Link } from "react-router-dom";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { Message, PaperPlaneIcon } from "../../../components/Icon";
import Image from "../../../components/Image";
import Search from "../../../layout/components/Search";
import config from "../../../config";

const cx = classNames.bind(styles);
const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    title: "English",
    children: {
      title: "Language",
      data: [
        {
          type: "language",
          code: "en",
          title: "English",
        },
        {
          type: "language",
          code: "vi",
          title: "Tiếng Việt",
        },
        {
          type: "language",
          code: "en",
          title: "Tiếng Nga",
        },
        {
          type: "language",
          code: "vi",
          title: "Tiếng Đức",
        },
        {
          type: "language",
          code: "en",
          title: "Tiếng Thái",
        },
        {
          type: "language",
          code: "vi",
          title: "Tiếng Pháp",
        },
        {
          type: "language",
          code: "en",
          title: "English",
        },
        {
          type: "language",
          code: "vi",
          title: "Tiếng Việt",
        },
        {
          type: "language",
          code: "en",
          title: "Tiếng Nga",
        },
        {
          type: "language",
          code: "vi",
          title: "Tiếng Đức",
        },
        {
          type: "language",
          code: "en",
          title: "Tiếng Thái",
        },
        {
          type: "language",
          code: "vi",
          title: "Tiếng Pháp",
        },
        {
          type: "language",
          code: "en",
          title: "English",
        },
        {
          type: "language",
          code: "vi",
          title: "Tiếng Việt",
        },
        {
          type: "language",
          code: "en",
          title: "Tiếng Nga",
        },
        {
          type: "language",
          code: "vi",
          title: "Tiếng Đức",
        },
        {
          type: "language",
          code: "en",
          title: "Tiếng Thái",
        },
        {
          type: "language",
          code: "vi",
          title: "Tiếng Pháp",
        },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: "Feedback and help",
    to: "/feedback",
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: "Keyboard shortcuts",
  },
];

function Header() {
  const currentUser = true;

  // useEffect(() => {
  //   setTimeout(() => {
  //     setSearchResult([1, 2, 3]);
  //   }, 0);
  // }, []);
  const handleMenuChange = (menuItem) => {
    console.log(menuItem);
  };

  const userMenu = [
    {
      icon: <FontAwesomeIcon icon={faUser} />,
      title: "Xem hồ sơ",
      to: "/feedback",
    },
    {
      icon: <FontAwesomeIcon icon={faBookBookmark} />,
      title: "Yêu thích",
      to: "/feedback",
    },
    {
      icon: <FontAwesomeIcon icon={faCoins} />,
      title: "Nhận xu",
      to: "/feedback",
    },
    {
      icon: <FontAwesomeIcon icon={faLightbulb} />,
      title: "Trung tâm nhà sáng tạo LIVE",
      to: "/feedback",
    },
    {
      icon: <FontAwesomeIcon icon={faGear} />,
      title: "Cài đặt",
      to: "/feedback",
    },
    ...MENU_ITEMS,
    {
      icon: <FontAwesomeIcon icon={faMoon} />,
      title: "Chế độ tối",
      to: "/feedback",
    },
    {
      icon: <FontAwesomeIcon icon={faRightFromBracket} />,
      title: "Đăng xuất",
      to: "/feedback",
      separate: true,
      toggle: true,
    },
  ];

  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div className={cx("logo")}>
          <Link to={config.routes.home} className={cx("logo-link")}>
            <img src={images.logo} alt="Tiktok" />
          </Link>
        </div>
        <Search />
        <div className={cx("actions")}>
          {currentUser ? (
            <>
              <Button outline leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                Tải lên
              </Button>

              <Tippy content="Tin nhắn" placement="bottom">
                <button className={cx("action-button")}>
                  <PaperPlaneIcon />
                </button>
              </Tippy>
              <Tippy delay={200} content="Hộp thư" placement="bottom">
                <button className={cx("action-button")}>
                  <Message />
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Button text>Upload</Button>
              <Button primary rightIcon={<FontAwesomeIcon icon={faSignIn} />}>
                Log in
              </Button>
            </>
          )}
          <Menu
            items={currentUser ? userMenu : MENU_ITEMS}
            onChange={handleMenuChange}
          >
            {currentUser ? (
              <Image
                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/5e426933125a32731ed89f9e978806a3.jpeg?x-expires=1698976800&x-signature=ezp%2FY1UgelWPCqhXYSzig%2FRSwGo%3D"
                alt=""
                className={cx("user-avatar")}
              />
            ) : (
              <button className={cx("more-btn")}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
