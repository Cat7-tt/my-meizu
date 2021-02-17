/*
Navicat MySQL Data Transfer

Source Server         : cat-7
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : meizu

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2020-12-18 14:13:45
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `user`
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `account` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', '张特价', '111');
INSERT INTO `user` VALUES ('2', '李灵佛', '123');
INSERT INTO `user` VALUES ('3', 'Ann', '1234');
INSERT INTO `user` VALUES ('6', '丽丽', '9999');
INSERT INTO `user` VALUES ('7', '18274595877', '123');
