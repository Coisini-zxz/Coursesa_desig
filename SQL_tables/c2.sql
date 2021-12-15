/*
Navicat MySQL Data Transfer

Source Server         : Ali
Source Server Version : 80018
Source Host           : rm-2ze9ef54d26gq84puao.mysql.rds.aliyuncs.com:3306
Source Database       : cov

Target Server Type    : MYSQL
Target Server Version : 80018
File Encoding         : 65001

Date: 2021-12-15 10:17:13
*/

SET FOREIGN_KEY_CHECKS=0;
-- ----------------------------
-- Table structure for `c2`
-- ----------------------------
DROP TABLE IF EXISTS `c2`;
CREATE TABLE `c2` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `cities` varchar(255) DEFAULT NULL,
  `number` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of c2
-- ----------------------------
INSERT INTO `c2` VALUES ('1', 'cities', 'number');
INSERT INTO `c2` VALUES ('2', '安徽', '9638');
INSERT INTO `c2` VALUES ('3', '澳门', '45');
INSERT INTO `c2` VALUES ('4', '北京', '11372');
INSERT INTO `c2` VALUES ('5', '福建', '1771');
INSERT INTO `c2` VALUES ('6', '甘肃', '1091');
INSERT INTO `c2` VALUES ('7', '广东', '22626');
INSERT INTO `c2` VALUES ('8', '广西', '2400');
INSERT INTO `c2` VALUES ('9', '贵州', '767');
INSERT INTO `c2` VALUES ('10', '海南', '1586');
INSERT INTO `c2` VALUES ('11', '河北', '2667');
INSERT INTO `c2` VALUES ('12', '河南', '14532');
INSERT INTO `c2` VALUES ('13', '黑龙江', '5450');
INSERT INTO `c2` VALUES ('14', '湖北', '643788');
INSERT INTO `c2` VALUES ('15', '湖南', '7512');
INSERT INTO `c2` VALUES ('16', '吉林', '855');
INSERT INTO `c2` VALUES ('17', '江苏', '5159');
INSERT INTO `c2` VALUES ('18', '江西', '8631');
INSERT INTO `c2` VALUES ('19', '辽宁', '1309');
INSERT INTO `c2` VALUES ('20', '内蒙古', '1838');
INSERT INTO `c2` VALUES ('21', '宁夏', '263');
INSERT INTO `c2` VALUES ('22', '青海', '21');
INSERT INTO `c2` VALUES ('23', '山东', '6473');
INSERT INTO `c2` VALUES ('24', '山西', '1341');
INSERT INTO `c2` VALUES ('25', '陕西', '1325');
INSERT INTO `c2` VALUES ('26', '上海', '10461');
INSERT INTO `c2` VALUES ('27', '四川', '7212');
INSERT INTO `c2` VALUES ('28', '台湾', '447');
INSERT INTO `c2` VALUES ('29', '天津', '1895');
INSERT INTO `c2` VALUES ('30', '西藏', '1');
INSERT INTO `c2` VALUES ('31', '香港', '1203');
INSERT INTO `c2` VALUES ('32', '新疆', '664');
INSERT INTO `c2` VALUES ('33', '云南', '1354');
INSERT INTO `c2` VALUES ('34', '浙江', '9742');
INSERT INTO `c2` VALUES ('35', '重庆', '14769');
