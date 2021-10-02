CREATE DATABASE  IF NOT EXISTS `u959049150_bdbeneclub` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `u959049150_bdbeneclub`;
-- MariaDB dump 10.17  Distrib 10.4.6-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: u959049150_bdbeneclub
-- ------------------------------------------------------
-- Server version	10.4.6-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `beneclub_beneficios`
--

DROP TABLE IF EXISTS `beneclub_beneficios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `beneclub_beneficios` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `baja` tinyint(4) NOT NULL DEFAULT 0,
  `descripcion` varchar(1000) DEFAULT NULL,
  `descuento` varchar(255) DEFAULT NULL,
  `direccion` varchar(255) DEFAULT NULL,
  `mapa` varchar(500) DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `provincia` varchar(255) DEFAULT NULL,
  `idCategoria` bigint(20) NOT NULL,
  `idImage` bigint(20) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FKn7f2y6tri2gaoxsht0sm5lyi3` (`idCategoria`),
  KEY `idImage_idx` (`idImage`),
  CONSTRAINT `FKn7f2y6tri2gaoxsht0sm5lyi3` FOREIGN KEY (`idCategoria`) REFERENCES `beneclub_categorias` (`idCategoria`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `beneclub_beneficios`
--

LOCK TABLES `beneclub_beneficios` WRITE;
/*!40000 ALTER TABLE `beneclub_beneficios` DISABLE KEYS */;
/*!40000 ALTER TABLE `beneclub_beneficios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `beneclub_categorias`
--

DROP TABLE IF EXISTS `beneclub_categorias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `beneclub_categorias` (
  `idCategoria` bigint(20) NOT NULL AUTO_INCREMENT,
  `bajaCategoria` tinyint(4) NOT NULL DEFAULT 0,
  `nameCategoria` varchar(255) NOT NULL,
  `idImageCategoria` bigint(20) NOT NULL,
  PRIMARY KEY (`idCategoria`),
  KEY `idImage_idx` (`idImageCategoria`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `beneclub_categorias`
--

LOCK TABLES `beneclub_categorias` WRITE;
/*!40000 ALTER TABLE `beneclub_categorias` DISABLE KEYS */;
INSERT INTO `beneclub_categorias` VALUES (1,0,'Salud',1),(2,0,'Alimentación saludable',2),(3,0,'Aire libre y deporte',3);
/*!40000 ALTER TABLE `beneclub_categorias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `beneclub_contacto`
--

DROP TABLE IF EXISTS `beneclub_contacto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `beneclub_contacto` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) DEFAULT NULL,
  `telefono` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `baja` tinyint(4) NOT NULL,
  `nombreComercio` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `beneclub_contacto`
--

LOCK TABLES `beneclub_contacto` WRITE;
/*!40000 ALTER TABLE `beneclub_contacto` DISABLE KEYS */;
/*!40000 ALTER TABLE `beneclub_contacto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `beneclub_user`
--

DROP TABLE IF EXISTS `beneclub_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `beneclub_user` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `password` varchar(255) DEFAULT NULL,
  `user` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `beneclub_user`
--

LOCK TABLES `beneclub_user` WRITE;
/*!40000 ALTER TABLE `beneclub_user` DISABLE KEYS */;
INSERT INTO `beneclub_user` VALUES (1,'adminBeneclub123','admin');
/*!40000 ALTER TABLE `beneclub_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `images_beneficio`
--

DROP TABLE IF EXISTS `images_beneficio`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `images_beneficio` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `imagenes` longblob DEFAULT NULL,
  `creado` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `images_beneficio`
--

LOCK TABLES `images_beneficio` WRITE;
/*!40000 ALTER TABLE `images_beneficio` DISABLE KEYS */;
/*!40000 ALTER TABLE `images_beneficio` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `images_categoria`
--

DROP TABLE IF EXISTS `images_categoria`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `images_categoria` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `imagenes` longblob NOT NULL,
  `creado` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `images_categoria`
--

LOCK TABLES `images_categoria` WRITE;
/*!40000 ALTER TABLE `images_categoria` DISABLE KEYS */;
INSERT INTO `images_categoria` VALUES (1,'�PNG\r\n\Z\n\0\0\0\rIHDR\0\0\0F\0\0\0F\0\0\0q.�\0\0\0	pHYs\0\0\0\0\0��\0\0\0sRGB\0���\0\0\0gAMA\0\0���a\0\0ZIDATx�_R�F�{�88o�\'��� ��\0U��\'\0N��!�q�Xq�	X���v��b��|=�,b��\Z�Y����lI�F#}����Q �@ %Q��(���\"��S�m�[�(]J�S���o�y{=�9�S*�|�GrL-Ш0/��;jFm���!3�c6f��dP�zLj^9A��B�A���Ј0?G������@JFo����u��L��nt�	��V��ۀ/��IJ5�-�n��h�{#��3�O34(���(���p�XL�`Ë0����ue\n�m��*��a��M4��Zi4|(���w{�T�Z(̜dG��5(�Bu�@����6?����q���@��T��(ֿeGV�GUL�E����,��uWӽy���ƨ-\\�iv[�ũ$�5y�oɎnuQϣx\"��I0���I�ƶ�i�-��\n|$-#�~]Q��䐔yx[��������큢�ܿy�y\"�0���c��~R�XI��Ef�6�v�Q�n����m�B��eS���P�H*z&�J�E��>�aE�cS��G�i����N�o���\rh9��y���rߢ�yF_8b5i�>V��}�z��HwDI,e�O�vr!�V��O�L��;X$�}�yY�6e}qk�vՓXD뾯oE�2�\"�n������zS)�D��Ŷ�\rȥ�\"��+�1m�I/R�!4�}]�d����%���\"Ek�x6\\Q�X��D6ì�^°��83j�s\\�����:V���ӉW;���t#�}yw��u��MJ��>��H�8�M�\0*~�jM>�9#:�|�~4:.�n7Z�D6��H<\'\n�Y#�b��o����ʂ�a*��i�%��Qf[mC\\�C�6�0��ZaG�f�W���7g5��<�Ah�������J��TGJ��=_5��ǭ\n�w��s����׈��e�F\na�Ԋ�7!O*�c^�[:�Ne$��O�\"��+����l:�2��1(�l��%�l����Z)�Xa.\n蜮���\'�e�)J�(#v���D����>Dx��o�.ʝi�Z��g���fng�PY�T��݈�9/Q*�6��d�K̡�Z���OX�k7�w�x�o���9���(�>����\n]��&Ais��ع�U&���k\'{�˶�$��������L˨nɵrJ je�+��ݻ˥�Sy����q�\Z��y:�֩�ʕVӤ��\'��Q��)�JQ^�t+\rF�sS�\"J�亚�+W�N\"�4o�UB�胲˩�Y��s���dﷆVw8ne�W�#�s�<�V�Ӿ�d}��Y��~8P�����` F�7$.9���QQ��6!��X=�\'�:ej䇭�3N�&���B��8��8�S�Eh�ǌ��`&�������S,;��Q�VJ�������9Rn��8V��)SEh�bY�����d��VF���wE_7�h�Ѫ0¨8�iƬ6�eJ���`}�9�ۈ��Eh]��\r>��M�R~�F�\Z]nRY�\r�\"���w+�$t���ʥ5���n���T��|b��\0cj9�ɧ^�\"�n��Nb����	δ0� ��?��ᇎ���j�j۟��F�q�VEl}X)�\r��!nT!K@�����}���@���hi��@ �@ ���/�^x�c��\0\0\0\0IEND�B`�','2021-10-02 18:58:55'),(2,'�PNG\r\n\Z\n\0\0\0\rIHDR\0\0\0F\0\0\0F\0\0\0q.�\0\0\0	pHYs\0\0\0\0\0��\0\0\0sRGB\0���\0\0\0gAMA\0\0���a\0\0�IDATx�[�sE~o���]C⣣�\\R���0�*K��q��/���)���RR%����ttVIy�@�R@��vy�ޭ�VNҞ�$�}3I�co����۷k�\n*T�P�B�\n�`*���w�1-E&�l�؈;1]\"F������̵kl�GWktЌ;��6\n#�Xb���C�b���q�KS����W�j6㒘ٴ�������s}����L�k�^�ỶaC[�Ǐwi°��x[����3w��#�ErpEۻ���˹B�ލ�m!����\rq��t���#�v�kB�}���y�=|�\'��o̐��\Z�����q�5�M��|\\۹���*�V��O�p�f�Sú)�9��k�n�Q;b��G7�f�?ޢa����!q�5�c�3-��A�r�&�k`��b�2ޕĘ�|o��X�hȹ���r����|����v�@JҾY܈�B�����-�\"�5fߑ I	JNM������~Qr��4�G�i�ZR�2�\\o	aeC�&f/Z�~m��W�!ǝC0��)H�i����n��+�Y���Ǽ�<�m\\����R+9G�Eq��Ćý��	d�$Њ�$eG,\rYYi��A�=9\\IJ6\r?�K������=��A�R�)�,値�m�)��+ g�ʾm̋�{�-�=��2v���H�^��+ �/�7�� 	r�k�i۾��\\�P\'T������|R;��`b6E�2�$�=�/�YSK�*�ȹb��3�!�b`93\ZAg���unR��\Z�D���N��_re�����X�A)�;)6%#�M��0�Q�A|��Z!� ^-Є��lc#\\0�}��+eZ3�D=r��E�*�,qg_��M}�-�n_�{j;$�\\���\\�w�\Z��:��(��v�´����s�-d�3KiH�Yuz�����q�#e0�����c\'R��y��M9��\0Ynt\Z�e�qJ2@4�`+��p�I��x���\"�B�\0�䂱��d� bN2���[��\0�.\'/�(�z[���y�q�4\'.<��r:�5��m#�:!dy�x���\n.c-`�+Y�l�s�C�Ψk��t�m�\r�J�Y�`Ѭ�\nލ殼V�a0�Z`( ���\\?D�\"N�s�ad��ı��h���)2J1�l舆�(������A�<���pR=�I�v����{R�s�#�09�HtN6� ��7�Ƅ�/!e�aA������Ai�\0�V-I�ۣ�q\'~\"�4@� )&M�nfm����@\\�3�Bʊi�YT2�uhna6;C ��aU���Q�ȡwY�ap{�k�>)�s)��8V�3ΪΑ#n�H�\"&`�	=�H�=�_���@�c�>L��\'�/Ng��:�XI�?FS��uL�Y��:I�-���WR ��G\np)3�,R\\m���Y�b��/�����%�AR��.��I.�?�r�s�� \")WH��F��U�P\\�+\r���1�I�V�e�R,�\rҽ�m���;��AG%�2���-�\'E�|˛�ٴaT���N��1U�F�lQ:)����,��[e�k�E�U� �F�0R\0WTB��2����e�\0�A֢;�X@�T�E����-�&`��T��w��I�S�	�,�ص�O|R�s�%�.w~u�~�u�5������孹���u{g���ӧ�][�^/��`��\"o�y�ۚ�ǠX���L�\ZT�\\3��P=�kYi�٪�1��4H���Ν�̙.�ð��=g��\Z8�\0���Q�\0���q�\0�HN�`��_�I�v^��)������(R����+�\\c�����<GNY�M�R])!�t�=��d#a��6s�4�m\\q�?�Շ9���Vp\nQ\Z1�H�(?�ʶHyr��ݬ�}e��R\\i)�ʶH���md5��2tL*�01�H��q\09~��$��J.D�z)\r���dwsQ��3��9	��/���`�����`;XF�!J��)9bY��r��\rl5���\0w�3J�UzQ�e\0\n�߾�ϫ�]C�E�	M�߿�L��4A8���h��\r>\n#���NČۮ3�܇��+#L\Z��U�s���\r�\0A���C�)l	Қ�R�v��@��/�\n�����gJ*�B�)Tv���=�5W.BkN:�$�>f��n�/��~|�}��+L=Q�%�B�Ww��O�픷\r$1�H��؜p=6v\rQ�y_��̝*T�P�B�\n���+�\n=��.\0\0\0\0IEND�B`�','2021-10-02 18:59:16'),(3,'�PNG\r\n\Z\n\0\0\0\rIHDR\0\0\0F\0\0\0F\0\0\0q.�\0\0\0	pHYs\0\0\0\0\0��\0\0\0sRGB\0���\0\0\0gAMA\0\0���a\0\0�IDATx�[MVG�n9/x������H��\0����	��{A��\'�|�p�}�!�t��<\Zϟ��|ʹfz�����zLT�B�\n*T��0�h��\Z�7F�1���Z��_��9�#f�0�?7VTMw�������Tf��-�����W��Ǌ�[~ק	@���{�F�@b����βR�%�oX��Ω1�|j;�\ZM\03ay����bއ\'��̋���]9��w�Xzr��\Z����M\0S7��a�]x�ُ����	����Ǆ�r�\ZLљ��xa}�J�T9F<E��@h��R{��~�ط^���yG�4�n�\r�~�J���-���A���i{�\'�(��,�~��g��\r2֎k�8�M�\Z l�fT�j�k�s\"J�!�Ϛw-�*�>~Ҩ�1	�A��7SO�I!�5�\Z�$+j���tm�|�km\\e{_L�|�B$b|{�4�z�����t�\"Y�e$kL1�b>�I!Hcb&#$��8�_���2MW�Ю�|�%J-RI�:��]�/��(�6/;/�~�Sl���A�𖥢���T=FZ�k�1�(�����B4#Y���P �R	��Ǹ�N���=��(E[�Ip�#^m�?�w�mьTVSyo��5��I��yy��T�[��ZƐm*�ѹY���0��\"����~ɂ�a���5�bt�����*�<T)u�H�(���BmcHy�*7\n	Mf�Ń��n^uJ鴇2�L�_�߰F�g�k�OSТ�t^}�#OڕG{�ҮH���h%�e�\Z����O�T\nƆCM��+�NT��7��Ts%�O�4o��@I3��GMT�\n�M��W\'����W��eK���IXT����3C�����j̀`ŀV���,�L�6ĔBʍ����9V�W��l��G�a][�o���J{�;0Ʈ�n���n��~3��E�Дz��[R\r�kV��%\Z�x8$��LB4�Q�e^���\"�0�7$�v�>⸧�Q��3�p�u�\n:UC&3B}$��g%i7`�\"H5�ɥp��m�>\"�GR�ꖤ1�V i7`���1Ib\ZҚ?Iú��B�EIy��OԞ�g�M�x�\'���WvCI�P+0#H��h��\0�\Z���A��~��h�bE 9	�Ь�W�R�2h[�5n��\'\Z�hq�B|E2�8�y������P��ؤ��(�(b�!�`E�R\\����ȋ�!����fڍ��7��)�Q�p\\h[��[W�T���Wu����Z�I/�)�=)ڎ���a��#0�%M�o�ܠj�v1M,�Ӑ�1�D>�}��G�IɨA^�u+%`\0f�r\"x��\0�\Z��E!Y�VZ�M���M-i(m�d5[5��=�j���P�;GҠ4��E��BsI|)�$#���z�{�v�9G�0���6����*@�L�|Ԙ��?P��)2���1Зp�n|�u�k�(����;�Q��6W#�̘�Mmd��\r)�FC<!oHH6�\'�i��]�.�%��4�m�QVk�7AF�64&X���蓄�	H����� �)�W4z9�u�G���\"G{���R7�D&�H��@���<	2�i.h�c�Z��4�0�HFZ���w�\rlߤ�+�}��*۷	�O�6��\r*�r�}\')$m�j������l\" ��6{�t�ǔ	�l�$�f}wP��y����޽B�\0���Sd���\0+��l��r��������wu������ye��2�T��ʠj`����W����S\"�6k#�\nV^���)>��ƨ�x��P�p�R�c�=����Qc��P�\Z�]����/�����F1�a�e��Ŧh\r}\r*���*�K�*����M��潤a#���ˏδ)}�����y�2ہ �\'�\Z�c�אO\'TEߟ�m0��E���&_�˾m�$v3�f҆\'��(�Ϻ���3a��?i�_��]�p{��p/�rټ���7n�����E4��}Wk$��\'���z��\"���_�@|0��W�P�B�\n*T��p�����ad�\0\0\0\0IEND�B`�','2021-10-02 18:59:27');
/*!40000 ALTER TABLE `images_categoria` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-10-02 19:01:38
