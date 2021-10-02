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
INSERT INTO `beneclub_categorias` VALUES (1,0,'Salud',1),(2,0,'AlimentaciÃ³n saludable',2),(3,0,'Aire libre y deporte',3);
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
INSERT INTO `images_categoria` VALUES (1,'‰PNG\r\n\Z\n\0\0\0\rIHDR\0\0\0F\0\0\0F\0\0\0q.â„\0\0\0	pHYs\0\0\0\0\0šœ\0\0\0sRGB\0®Îé\0\0\0gAMA\0\0±üa\0\0ZIDATxíš_RÜFÆ{†88o¼\'¶åŸ ëŸ\0U’³\'\0NÀú!¶q¥Xqð	XŸÀävòüb‡é|=Ò,bÙÅ\ZýYœÔüªlI‹F#}ÓÓÓÝQ @ %QÔý(žûô‰\"Ö¦SùmÛ[·(]J“SªÀ«oãy{=¢9ûS*×|òGrL-Ð¨0/¾‹;jFmâ²šØ!3«c6fý÷dPæzLj^9A®’B¤A™ëùÐˆ0?Gñü«ë™@JFo¬½ÿåuñÇLÝÇntµ	§ÙVûÛ€/­§IJ5©-Ìn´²h˜{#Š›3¼O34(Þà‹(Ž°‰pÞXL¬`Ã‹0õÖÞíue\nþmôî*¾èaüõM4¯ØZi4|(¦­Õw{ÛTƒZÂˆ(ÌœdGœæ£5(ÓBuð@ýÂ¥ù6?¶£¿íq½ø’@¹ØT‘ÊÂˆ(Ö¿eGV”GULøE´¼…Þ,þ¦uWÓ½y²‹ûÆ¨-\\àiv[ÕÅ©$Œ5yÖoÉŽnuQÏ£x\"÷åI0—µ’IÅÆ¶‹iå-²¦\n|$-#É~]Q„Óä”yx[ñýº¢ëé¬†í¢ÍÜ¿yñy\"0œ›ìc»½~RšXIŠüEfé6évç”QØnø´÷¶môB¶‡eS›„¾PºH*z&ûJ©E™þ>í½…aE¹cSƒ¦G¹iÎÈôàµNñoîìÜ\rh9¼„y…¸rß¢µyF_8b5iË>Vºï}Úzù˜HwDI,e§OÒvr!ôV¬¾O©L¿â†;X$æ}šyYŒ6e}qk¢vÕ“XDë¾¯oEò2Ù\"ÒnÏÇÀ‰ÝËzS)µD¾êÅ¶ñ\rÈ¥¨\"Ÿ“+Å1m¢I/Rá!4œ}]«dúûœï%’ÅÔ\"EkÁx6\\QêXÊD6Ã¬¼^Â°Îæ«83jÉs\\š¡¹çâ:Vƒ¶ìÓ‰W;Ÿ“çt#ß}ywåéu¡¹MJˆÉ>æ¾ÄHÅ8åˆMª\0*~ÙjM>í¼„9#:æ|®~4:.Ûn7ZÞD6×ÓH<\'\nšY#êbôŠí†oÎóüÎÊ‚«a*½ñië%Œ½Qf[mC\\ðC™6ò0¨ûZaGÞfÑWÏµ÷7g5²¯<­Ah¥£¶ã¥û¯JÚ¦TGJŸ=_5‚ØÇ­\n»wâ…Ñs²«ù×ˆÕÄe­F\na®ÔŠ¨7!O*Õc^Þ[:’Ne$ÕÅOê\"²ÿ+Ž³ÇÞl:‹2ƒ¼1(¼l¶þ%ƒlŠÕÛüZ)•Xa.\nèœ®ôï“\'ÞeÛ)JŽ(#v²ŽËD”íÓþ>DxƒÆoÑ.Êi×Z‹±g—éfng¥PYµTô¹Ýˆó9/Q*—6Õd½KÌ¡ÆZŽÒæOXÖk7Çw£xƒoùŠâ9±û°(ïº>¥®‹·\n]ýÌ&AisºÂØ¹ŽU&÷ú‡k\'{Ë¶½$ª¥š¹¿ö²LË¨nÉµrJ jeÜ+Š…Ý»Ë¥£Sy›À…Îq‹\ZÀ†y:ìÖ©ÕÊ•VÓ¤‡×\'ÖüQÀÚ)µJQ^Æt+\rFösS¨\"J±äºšÖ+WÔN\"Ï4o¸UBÏèƒ²Ë©¬Y™¥s¼ šdï·†Vw8neó¥‘W´#þsÛ<šVÙÓ¾d}ä–æYÅ«~8P¤‘²ƒˆ` Fî7$.9ªòÊÂ—QQÄÙ6!ŠÐX=æ\'”:ejä‡­‹3N”&­´ÑB•¼8›†8âSÚEhÄÇŒ’½`&‹úœ—ÑÊS,;½ì¨Q„VJ›¸Ñä¹ó9Rn¸’8VÀÆ)SEhÅbY‚¨Ž†‰dÅïVF¿›‘wE_7èhÇÑª0Â¨8òiÆ¬6ÛeJÚÃâ`}ó¶9ÊÛˆÚEh]Á–\r>‡ÉM§R~ÇFÒ\Z]nRY¢\r¦\"ŒãÒw+â$tŸðíÊ¥5üªn˜ïÃT…®|b†Ò\0cj9ëÉ§^ÿ\"ûn×ÉNbêÂöá	Î´0µ ÆŽ?Íýá‡Ž¨óÌjÞjÛŸŒãF„q‹VEl}X)”\röº!nT!K@ÕÁÅç­Í}«û¿@¢åÝhi‘@ @ ø¯ñ/ä°^xÙc×\0\0\0\0IEND®B`‚','2021-10-02 18:58:55'),(2,'‰PNG\r\n\Z\n\0\0\0\rIHDR\0\0\0F\0\0\0F\0\0\0q.â„\0\0\0	pHYs\0\0\0\0\0šœ\0\0\0sRGB\0®Îé\0\0\0gAMA\0\0±üa\0\0•IDATxí[¿sE~o‚¡‰]Câ££³\\RÅî˜É0˜*KÎŽq‘ø/°òØ)˜Ä‘RR%™¨ìttVIyö@R@œ€vyßÞ­½VNÒžï$Ã}3I÷co÷»÷ãÛ·k¢\n*T¨P¡B…\nþ`*¢Ûw1-E&Öl¾Øˆ;1]\"Fˆú´„ïÌµklúGWktÐŒ;½Ð6\n#Xb£ö½C±býÅ×q§KSÄÃ¥ŠWóªj6ã’˜Ù´Öãö“öŠs}­ÁŠÚL¦k˜^á»¶aC[ëÇwiÂ°„Ôx[ž¸äŽé3w¦#ÛErpEÛ»Êú£Ë¹BÄÞµm!¢Ñë¨Ž\rqt‰Í#çväškBÎ}š¤ýyÎ=|—\'÷ÄoÌÞÍ\Zø£ùæ¾ôqé5ñMùù|\\Û¹‰ÿ*­V´ÒOØp£fÔSÃº)Ò9¤©k”n’Q;b­G7Öfï?Þ¢aû€çÕ!q»5êcø3-±æAŠr¢&þk`­ÄbÌ2Þ•Ä˜¶|oÊ÷XÈhÈ¹›šõrúûÞÞ|óÐÄ€vÓ@JÒ¾YÜˆ·Bï×Ùñç-ä\"¦5fß‘ I	JNM«»é¹ÔÍÔ~Qrðü4ÐGˆiïZRÂ2 \\o	aeC®&f/ZÛ~mÔøWš!ÇC0´ƒ)HÎií ý«Ònžô+ýYÀ‡ùÇ¼¹<˜m\\£ž¸R+9GíEqò”Ä†Ã½ëÊ	d¿$ÐŠæ$eG,\rYYiã·ÎAÈ=9\\IJ6\r?ËKŽàöãö=¹ç¾AŒRê)Ò,å€¤Ümû)ÏÍ+ gúÊ¾mÌ‹Ð{Â-Æ=£†2v€§äHÊ^”ï+ §/Ê7‹ 	rìƒkêiÛ¾Éñ€µ\\ÈP\'T ù¸²š|R;ôž`b6EÉ2ë$í²¼=Ñ/‰YSKí*²È¹b¸í“3¨!“b`93\ZAg³„£unR¾‹\ZõDü™øNÜ«_re¥õ¸³‹XA)Ã;)6%#M±0QšA|ßÖZ!Þ ^-Ð„Ñ×lc#\\0Ï}¹Þ+eZ3†D=r½¦Eá*½,qg_žŒM}ù-ân_ˆ{j;$¤\\µ±ç\\ëwå\Z¨ä:å«(ÏåvºÂ´Š——×s¼-dƒ3KiHŒYuzÅê£¶ýq­#e0ƒœœžç c\'R¶«y¼€M9‘›\0Ynt\Z€eþqJ2@4Œ`+þpßIó¡÷xšçà\"ûBÄ\0Æä‚±áÝdª bN2–¿—[€\0§.\'/â(äz[’¸‡y”qÙ4\'.<»Är:£5¤Ñm#“:!dyãxü¼Å\n.c-`¬+Y¥løsûCéÎ¨k¿•t®mŒ\r¸JÈY¿`Ñ¬œ\nÞæ®¼VÔa0Z`( š¾\\?D\"NÈs«ad–ÞÄ±“¾h¦šº)2J1‹lèˆ†¥(æûëñÅëA¥<¼ÑìpR=ëIÏv¹¯Ÿý{RÅsó#Ÿ09ÖHtN6™ à7‹Æ„ñ/!e¢aAºŠŸ«ÉäAiÄ\0âV-IÝÛ£¯q\'~\"™4@Î )&M÷nfmÛÐæ‰Ô@\\«3òBÊŠiöYT2¬uhna6;C ‘¢aU¢¢—QöÈ¡wYÏap{ók‡>)´s)÷8V¥3ÎªÎ‘#n¥HÍ\"&`Â	=äH=š_ƒû¬@¬c¦>LÀ\'Ç/Ng‘‚:XIË?FSÀ…uL¸Y¶ç:IÝ-“”ë·WR •¦G\np)3ˆ,R\\m— ¢Y–bâÉ/Åø¸‹ñ%ARüÚ.‚í´I.•?¼r¥s•Í \")WHúîƒF½¬U†P\\š+\rªƒÇ1ÓIªVÕeàR,Æ\rÒ½ïmðƒ­;þ§AG%¬2äÁÔ-Æ\'Eª|Ë›ñÙ´aT°õ§NÿÐ1U‹FŠlQ:)¨¾ùË,Çí†[e€kíEÍUš ¦FÌ0R\0WTB°Å2Ž¡¢eŸ\0•AÖ¢;ØX@ÂTˆEŠŸ™´-™&`¯–Tú€wÕÃI‘S£	ã,ËØµ©O|Rì¢sß%Ø.w~uç~èu¹5·ˆø©Ðôå­¹…ïìu{gçŽì²Ó§Ÿ][¤^/¦…`¢ã“\"o·yŽÛš­Ç X½µ™Lí\ZTº\\3˜‘P=´kYiÝÙªç1±¬4HŠ²ãÎ¯Ì™.®Ã°º=g³£\Z8²\0Ÿ±˜Q¤\0þ®…q¤\0ÈHNË`½Ê_ÚIþv^†Ö)˜½èöê(R§ÍÒ+»\\cºÉà“Å<GNYÛM€R])!Åtð=‹”d#a²Ã6sŠ4ßm\\qÜ?Õ‡9ÏØòVp\nQ\Z1çHÉ(?úÊ¶Hyr€œÝ¬ý}e¨äR\\i)ƒÊ¶HÍöÌmd5ûû2tL*¹01ãHòÛq\09~ªÎ$§ J.DÌz)\r¶ã€ødwsQª€3¬â9	Á/¥˜Å`™„†“‚`;XF !JùÙ)9bYÛ×r´Û\rl5…ˆ‘\0wŸ3J¿UzQ¶e\0\nØß¾æÏ«Î]CÔEÌ	Mã¥ß¿–L³Ê4A8—±‡h˜\r>\n#±ûNÄŒÛ®3©Ü‡¥œ+#L\Z£æUˆs”ÿð\rÓ\0AõžáC«)l	ÒšëRòv¦»@æà/ù\nž‘ÝžügJ*øBÚ)Tvø¹×=¹5W.BkN:³$‡>f»¾nî/åº~|Ù}–”+L=QÀ%ÛBÌWwâÎO¡í”·\r$1ÝH‹¶Øœp=6v\rQýy_¬¹Ì*T¨P¡B…\nþƒø+Ó\n=ÍË.\0\0\0\0IEND®B`‚','2021-10-02 18:59:16'),(3,'‰PNG\r\n\Z\n\0\0\0\rIHDR\0\0\0F\0\0\0F\0\0\0q.â„\0\0\0	pHYs\0\0\0\0\0šœ\0\0\0sRGB\0®Îé\0\0\0gAMA\0\0±üa\0\0ÀIDATxí[MVG®n9/xÃø†ŸÀâHø½\0ñÂèÀ	‹È{AâÆ\'°|‚p’}ä•!Ïtå«î<\ZÏŸ¤Î|Í´fzª«¾ªúzLT¡B…\n*T¨ð0¡hÑñ\Zó7F·1»¾úZ™Õ_üî9Ý#fÎ0‡?7VTMwð§ÇÄçŠÔþöTfùú-©šÚÁ´Wˆ¸ÇŠ›[~×§	@ÓáÈ{õFù@b¦½­ËÎ²R¦%ßoXÿéÎ©1˜|j;ô\ZM\03ay¸£ÅæbÞ‡\'ø¬Ì‹­«“]9·áwåXzrîž\ZŒ‰æ«M\0S7Œ„aå]xÐÙŠ—½è	¡°šÇ„ûrÌ\ZLÑ™üîxa}›JÆT9F<E±¾@hôµR{þÉ~ÚØ·^£ŽÐyGß4ýn¿\r’~ÌJŒêñ-¼ìïAƒŽƒi{Œ\'ÿ(¦Ó,£~õ»gµù\r2ÖŽkÁ8âMö\Z lÉfT¦j˜k¢s\"J­!ÑÏšw-ñ*Ú>~Ò¨Ë1	»A—Æ7SO×I!’5Þ\Zœ$+j„ˆƒtmÉ|ïkm\\e{_L|“B$b|{ñŒ4–z§Œš‰t\"Yˆe$kL1˜b>ƒI!Hcb&#$Š¸8°_´îâ2MWóÐ®¤|ë%J-RI˜:ÇÈ]µ/üõ(÷6/;/ò~‚Sl¥ìãAúð–¥¢¿ÍÃT=FZ€kÔ1Î(Òû˜ñÉB4#Y£€«P ®R	˜ŠÇ¸ÂNˆÓö=ÅÝ(E[ÙIpï#^mæ?w£mÑŒTVSyo†‰5ŠàI³ºyy²šT·[´ÙZÆm*µÑ¹Y­îÅ0ƒ\"÷œ— ~É‚Ña†©ç5‰bt­éý¢ù*ç<T)u»H£(°êó’ºBmcHyñ*7\n	MfÞÅƒÌùn^uJé´‡2ŒLú_£ß°FógøkÞOSÐ¢ët^}#OÚ•G{àÒ®H¦ù™h%©eæ²\Z±ÙÚòOºT\nÆ†CM¿³+óNTŠç7¯±Ts%ŽOç4oçö@I3¾òGMTº\n¤Mû›W\'­èõ­WÁèeKœ¹†IXT¨¦÷®3C°Ž­ä±÷jÍ€`Å€Vž”¸,¸LÅ6Ä”BÊ…›¤ð9VýW¸Él‰¡G¦a][ÊoðŽøJ{ë;0Æ®ãnæìàn€½~3®ÞEç‚Ð”zÅË[R\r¨kV˜¶%\Z½x8$¯ä·LB4†Qüe^“Úˆ\"Õ0¡7$¹v¡>â¸§˜Q¢¡3Ép©uŒ\n:UC&3B}$øêg%i7`\"H5²É¥p›¯mˆ>\"ÙGRóê–¤1ñV i7`–É1Ib\ZÒš?IÃº¦ÛBàEIy ÓOÔžËgÑM­xó\'†•ªWvCI P+0#Hô˜hÚÅ\0»\Z¦ä¤ñA†~Âóh—bE 9	ûÐ¬»WœRÉ2h[îŸ5n˜û\'\ZæhqýB|E2¶8úyúˆïöˆòPöÆØ¤îÿ(å¸(bç!¯`EšR\\úÈÀ‡È‹°!øˆºð¨fÚŸ¬7”¦)íQ‰p\\h[÷[WTÉáí“Wu­ùÖZ’I/ïº)Ã=)ÚŽ½¦Õa‹è#0ä%M˜o¦Ü j·v1M,ÌÓè1–D>ð’}¬ÈGñIÉ¨A^âu+%`\0fór\"xåá\0ë\Zž‰E!Y˜VZ¶Mô˜¼M-i(md5[5öÎ=Ãj©º¼Pð;GÒ 4Ž±EÛáBsI|)Ú$#‰ÁÞzë{ð’vØ9G¶0†‚Ý6·þ¦*@žL¾|Ô˜ú·?P”ž)2ïæÝ1Ð—pøn|”u‘kè(™žÃ;¶Q¨½6W#¹Ì˜Mmd‘Î\r)±FC<!oHH6’\'õiÀ¨]™.ä%Ï4Œm¨QVkÂ7AFº64&Xˆúžè“„¥	H›ŸûÓ £)©W4z9¶u‹GÀ£¼\"G{–ˆR7¬D&øHãÀ@‚ü«<	2Ði.hÀcÏZ‰Ù4×0‚HFZ«¯Ðw‚\rlß¤+¼}òº*Û·	¸Oÿ6Œð\r*Ërö}\')$mÏj¦Þóµ‚•l\" ˜¡6{™tªÇ”	é—lš$›f}wPùáy›¥´éÞ½B¶\0‹ÌSd¡ŸÜ\0+¡Úl„ârÞð†ÉÀýò»wu½ µÖÝyeûÉ2¾T¥ÆÊ j`Œ«€ØWŽïÎï®S\"†6k#º\nV^¯¡è“)>æ÷Æ¨ƒxºßP¼pÇRþcÎ=ŽƒQcÝýPé\Zó]´ª¢Ö/­­ù«·F1´aäeÂÃÅ¦h\r}\r*¡ƒÌ*íKß*Á–ÌÛM‚¼æ½¤a#‘¯¼ËÎ´)}‡Á°‡…y“2Û ï\'\Z™c¤×O\'TEßŸ›m0«E¶Ç&_¤Ë¾mê$v3ÞfÒ†\'ªÛ(šÏº¿¢Ú3aðð?iä_® ]¸p{ÊÙp/ðrÙ¼¾ƒ—7n˜û—’®E4‡±}Wk$Áð\'£¹ûzûÎ\" åÞ_¦@|0‰ûW¨P¡B…\n*T¨ðpñ‹¡­íadæ\0\0\0\0IEND®B`‚','2021-10-02 18:59:27');
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
