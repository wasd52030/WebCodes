-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- 主機： 127.0.0.1
-- 產生時間： 2023-01-08 05:52:23
-- 伺服器版本： 10.4.22-MariaDB
-- PHP 版本： 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫: `n`
--
CREATE DATABASE IF NOT EXISTS `n` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `n`;

-- --------------------------------------------------------

--
-- 資料表結構 `account`
--

DROP TABLE IF EXISTS `account`;
CREATE TABLE `account` (
  `UserID` int(100) NOT NULL,
  `PassWord` varchar(100) NOT NULL,
  `account` varchar(100) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 資料表新增資料前，先清除舊資料 `account`
--

TRUNCATE TABLE `account`;
--
-- 傾印資料表的資料 `account`
--

INSERT INTO `account` (`UserID`, `PassWord`, `account`, `name`) VALUES
(1, 'qwerty', 'qwe', 'zzz'),
(5, 'c', 'b', 'a'),
(7, 'q', 'w', 'd'),
(8, 'd', 'd', 'd'),
(10, 'q', 'dw', 'd'),
(11, 'e', 'w', 'q'),
(12, 'd', 's', 'w'),
(13, 'rr', 'ww', 'ee');

-- --------------------------------------------------------

--
-- 資料表結構 `characters`
--

DROP TABLE IF EXISTS `characters`;
CREATE TABLE `characters` (
  `id` int(11) NOT NULL,
  `name` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 資料表新增資料前，先清除舊資料 `characters`
--

TRUNCATE TABLE `characters`;
--
-- 傾印資料表的資料 `characters`
--

INSERT INTO `characters` (`id`, `name`) VALUES
(22, 'zxc'),
(30, 'asdad'),
(32, 'zxcs'),
(34, 'vvv'),
(36, 'zxcsw'),
(37, 'x'),
(38, 'qqzcx');

-- --------------------------------------------------------

--
-- 資料表結構 `employee`
--

DROP TABLE IF EXISTS `employee`;
CREATE TABLE `employee` (
  `id` varchar(20) NOT NULL,
  `name` varchar(100) NOT NULL,
  `pwd` varchar(20) NOT NULL,
  `EntryDate` date NOT NULL,
  `address` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `phone` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 資料表新增資料前，先清除舊資料 `employee`
--

TRUNCATE TABLE `employee`;
--
-- 傾印資料表的資料 `employee`
--

INSERT INTO `employee` (`id`, `name`, `pwd`, `EntryDate`, `address`, `email`, `phone`) VALUES
('E315', 'qwe', 'sda', '2021-11-11', 'qewq', 'sdasd', 1231),
('R123', 'asd', 'zcx', '2021-12-18', 'hq', 'ra', 125);

-- --------------------------------------------------------

--
-- 資料表結構 `files`
--

DROP TABLE IF EXISTS `files`;
CREATE TABLE `files` (
  `id` int(11) NOT NULL,
  `filename` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 資料表新增資料前，先清除舊資料 `files`
--

TRUNCATE TABLE `files`;
-- --------------------------------------------------------

--
-- 資料表結構 `login_info`
--

DROP TABLE IF EXISTS `login_info`;
CREATE TABLE `login_info` (
  `id` int(11) NOT NULL,
  `user` varchar(100) NOT NULL,
  `time` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 資料表新增資料前，先清除舊資料 `login_info`
--

TRUNCATE TABLE `login_info`;
--
-- 傾印資料表的資料 `login_info`
--

INSERT INTO `login_info` (`id`, `user`, `time`) VALUES
(10, 'a', '2023/1/8 下午12:50:54'),
(11, 'd', '2023/1/8 下午12:51:03');

-- --------------------------------------------------------

--
-- 資料表結構 `orderlist`
--

DROP TABLE IF EXISTS `orderlist`;
CREATE TABLE `orderlist` (
  `id` int(100) NOT NULL,
  `order_id` varchar(100) NOT NULL,
  `product_id` varchar(100) NOT NULL,
  `num` int(100) NOT NULL,
  `price` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 資料表新增資料前，先清除舊資料 `orderlist`
--

TRUNCATE TABLE `orderlist`;
--
-- 傾印資料表的資料 `orderlist`
--

INSERT INTO `orderlist` (`id`, `order_id`, `product_id`, `num`, `price`) VALUES
(2, 'null', 'Q13', 25, 123);

-- --------------------------------------------------------

--
-- 資料表結構 `orders`
--

DROP TABLE IF EXISTS `orders`;
CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `retailer_id` varchar(100) NOT NULL,
  `user_id` varchar(100) NOT NULL,
  `date` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 資料表新增資料前，先清除舊資料 `orders`
--

TRUNCATE TABLE `orders`;
--
-- 傾印資料表的資料 `orders`
--

INSERT INTO `orders` (`id`, `retailer_id`, `user_id`, `date`) VALUES
(9, '', 'A001', '2021-12-20-09-37-00'),
(10, '', 'A001', '2021-12-27-14-52-39');

-- --------------------------------------------------------

--
-- 資料表結構 `product`
--

DROP TABLE IF EXISTS `product`;
CREATE TABLE `product` (
  `id` varchar(20) NOT NULL,
  `name` varchar(20) NOT NULL,
  `cost` int(20) NOT NULL,
  `price` int(20) NOT NULL,
  `count` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 資料表新增資料前，先清除舊資料 `product`
--

TRUNCATE TABLE `product`;
--
-- 傾印資料表的資料 `product`
--

INSERT INTO `product` (`id`, `name`, `cost`, `price`, `count`) VALUES
('Q123', 'sada', 123, 123, 13),
('Q13', 'asd', 213, 123, 123),
('Q23', 'eq', 13, 14, 15);

-- --------------------------------------------------------

--
-- 資料表結構 `supplier`
--

DROP TABLE IF EXISTS `supplier`;
CREATE TABLE `supplier` (
  `Id` int(11) NOT NULL,
  `Name` varchar(50) DEFAULT NULL,
  `ContactPerson` varchar(255) DEFAULT NULL,
  `Phone` int(20) DEFAULT NULL,
  `Address` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 資料表新增資料前，先清除舊資料 `supplier`
--

TRUNCATE TABLE `supplier`;
--
-- 傾印資料表的資料 `supplier`
--

INSERT INTO `supplier` (`Id`, `Name`, `ContactPerson`, `Phone`, `Address`) VALUES
(6, 'dfd', 'zxcqwe', 1234, 'zcxdas'),
(9, 'gfd', 'qweqwe', 5, 'weqwe'),
(11, 'iufb', 'hiu', 87, 'ukyd'),
(12, 'qweqwe', 'xcsda', 123, 'zcx'),
(13, 'Wqsda', 'zxc', 123, 'qew'),
(25, 'zxcs', '1', 2, '3');

-- --------------------------------------------------------

--
-- 資料表結構 `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` varchar(10) NOT NULL,
  `pwd` varchar(15) NOT NULL,
  `email` varchar(20) NOT NULL,
  `phone` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 資料表新增資料前，先清除舊資料 `user`
--

TRUNCATE TABLE `user`;
--
-- 傾印資料表的資料 `user`
--

INSERT INTO `user` (`id`, `pwd`, `email`, `phone`) VALUES
('A123', 'u', 'v', '78'),
('A280', 'uuu', 'zxc132', '4654646'),
('A555', '789', '45', '12'),
('A888', '123', '456', '789'),
('D33', 'q', 'dasd', '123124');

-- --------------------------------------------------------

--
-- 資料表結構 `x`
--

DROP TABLE IF EXISTS `x`;
CREATE TABLE `x` (
  `id` int(11) NOT NULL,
  `name` varchar(32) NOT NULL,
  `addr` varchar(255) NOT NULL,
  `birth` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 資料表新增資料前，先清除舊資料 `x`
--

TRUNCATE TABLE `x`;
--
-- 傾印資料表的資料 `x`
--

INSERT INTO `x` (`id`, `name`, `addr`, `birth`) VALUES
(23, 'qwa', 'cqc', '1949-05-06'),
(24, 'asfdhe', 'zayw8qx', '1989-12-31'),
(185, 'aaa', 'cwc', '1949-01-02'),
(815, 'yuq', 'cnc', '1949-09-10');

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `account`
--
ALTER TABLE `account`
  ADD PRIMARY KEY (`UserID`);

--
-- 資料表索引 `characters`
--
ALTER TABLE `characters`
  ADD PRIMARY KEY (`id`);

--
-- 資料表索引 `employee`
--
ALTER TABLE `employee`
  ADD PRIMARY KEY (`id`);

--
-- 資料表索引 `files`
--
ALTER TABLE `files`
  ADD PRIMARY KEY (`id`);

--
-- 資料表索引 `login_info`
--
ALTER TABLE `login_info`
  ADD PRIMARY KEY (`id`);

--
-- 資料表索引 `orderlist`
--
ALTER TABLE `orderlist`
  ADD PRIMARY KEY (`id`);

--
-- 資料表索引 `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- 資料表索引 `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- 資料表索引 `supplier`
--
ALTER TABLE `supplier`
  ADD PRIMARY KEY (`Id`);

--
-- 資料表索引 `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- 資料表索引 `x`
--
ALTER TABLE `x`
  ADD PRIMARY KEY (`id`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `account`
--
ALTER TABLE `account`
  MODIFY `UserID` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `characters`
--
ALTER TABLE `characters`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `files`
--
ALTER TABLE `files`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `login_info`
--
ALTER TABLE `login_info`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `orderlist`
--
ALTER TABLE `orderlist`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `supplier`
--
ALTER TABLE `supplier`
  MODIFY `Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `x`
--
ALTER TABLE `x`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=816;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
