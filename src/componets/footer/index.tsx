import React from "react";
import style from "./style.module.css";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className={style.footer}>
      <div className={style.footer_top}>
        <div className={style.col}>
          <div className={style.timCuaHang}>
            <ul className={style.list}>
              <li className={style.title}>
                <strong>Tìm cừa hàng</strong>
              </li>
              <li>Tìm cửa hàng gần nhất</li>
              <li className={style.red}>
                Gặp trực tiếp cửa hàng gần nhất (Zalo hoặc gọi điện)
              </li>
              <li className={style.title}>
                <strong>Phương thức thanh toán</strong>
              </li>
              <li>
                <div className={style.pttt}>
                  <img src="../../../img/Rectangle (1).png" alt="" />
                  <img src="../../../img/Rectangle (2).png" alt="" />
                  <img src="../../../img/Rectangle (3).png" alt="" />
                  <img src="../../../img/Rectangle (4).png" alt="" />
                  <img src="../../../img/Rectangle (5).png" alt="" />
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className={style.col}>
          <div className={style.timCuaHang}>
            <ul className={style.list}>
              <li>Gọi mua hàng: 1800.2044 (8h00 - 22h00)</li>
              <li>Gọi khiếu nại: 1800.2063 (8h00 - 21h00)</li>
              <li className={style.margin_t}>
                Gọi bảo hành: 1800.2064 (8h00 - 21h00)
              </li>
              <li className={style.title}>
                <strong>Đối tác dịch vụ bảo hành</strong>
              </li>
              <li className={style.margin_t}>Điện thoại - Máy tính</li>

              <li className={style.title}>
                <strong>Trung tâm bảo hành uỷ quyền Apple</strong>
              </li>
              <li>
                <img src="../../../img/Rectangle.png" alt="" />
              </li>
            </ul>
          </div>
        </div>

        <div className={style.col}>
          <div className={style.timCuaHang}>
            <ul className={style.list}>
              <li>Mua hàng và thanh toán Online</li>
              <li>Mua hàng trả góp Online</li>
              <li>Tra thông tin đơn hàng</li>
              <li>Tra điểm Smember</li>
              <li>Tra thông tin bảo hành</li>
              <li>Tra cứu hoá đơn VAT điện tử</li>
              <li>Trung tâm bảo hành chính hãng</li>
              <li>Quy định về việc sao lưu dữ liệu</li>
              <li className={style.rednomg}>Dịch vụ bảo hành điện thoại</li>
            </ul>
          </div>
        </div>

        <div className={style.col}>
          <div className={style.timCuaHang}>
            <ul className={style.list}>
              <li>Quy chế hoạt động</li>
              <li>Chính sách Bảo hành</li>
              <li>Liên hệ hợp tác kinh doanh</li>
              <li>Khách hàng doanh nghiệp (B2B)</li>
              <li className={style.rednomg}>Ưu đãi thanh toán</li>
              <li>Tuyển dụng</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={style.footer_bottom}>
        <div className={style.ft_bottom_top}>
          <div className={style.col}>
            <div className={style.timCuaHang}>
              <ul className={style.list}>
                <li>
                  Điện thoại iPhone 13 - Điện thoại iPhone 12 - Điện thoại
                  iPhone 11
                </li>
                <li>
                  Điện thoại iPhone 13 Pro Max - Điện thoại iPhone 11 Pro Max
                </li>
                <li>
                  iPhone cũ giá rẻ - iPhone 13 cũ - iPhone 12 cũ - iPhone 11 cũ
                </li>
              </ul>
            </div>
          </div>
          <div className={style.col}>
            <div className={style.timCuaHang}>
              <ul className={style.list}>
                <li>
                  Điện thoại iPhone - Điện thoại Samsung - Điện thoại Samsung A
                </li>
                <li>
                  Điện thoại OPPO - Điện thoại Xiaomi - Điện thoại Vivo - Điện
                  thoại Nokia
                </li>
                <li>
                  Samsung Fold 3 - Samsung S22 - Samsung A73 - Samsung A53
                </li>
              </ul>
            </div>
          </div>
          <div className={style.col}>
            <div className={style.timCuaHang}>
              <ul className={style.list}>
                <li>Laptop - Laptop HP - Laptop Dell - Laptop Acer</li>
                <li>Microsoft Surface - Laptop Lenovo - Laptop Asus</li>
                <li>
                  Máy tính để bàn - Màn hình máy tính - Camera - Camera hành
                  trình
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className={style.location_ft}>
          Công ty TNHH Thương mại và dịch vụ kỹ thuật DIỆU PHÚC - GPĐKKD:
          0316172372 do sở KH & ĐT TP. HCM cấp ngày 02/03/2020. Địa chỉ: 350-352
          Võ Văn Kiệt, Phường Cô Giang, Quận 1, Thành phố Hồ Chí Minh, Việt Nam.
          Điện thoại: 028.7108.9666.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
