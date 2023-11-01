import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx("wrapper")}>
      <img
        className={cx("avatar")}
        src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/5e426933125a32731ed89f9e978806a3.jpeg?x-expires=1698976800&x-signature=ezp%2FY1UgelWPCqhXYSzig%2FRSwGo%3D"
        alt=""
      />

      <div className={cx("info")}>
        <p className={cx("name")}>
          Thanh Binh
          <span>
            <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
          </span>
        </p>
        <span className={cx("username")}>thanhbinh3010</span>
      </div>
    </div>
  );
}

export default AccountItem;
