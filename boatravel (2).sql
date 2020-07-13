-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 13-07-2020 a las 18:51:25
-- Versión del servidor: 10.4.11-MariaDB
-- Versión de PHP: 7.4.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `boatravel`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clasificacion`
--

CREATE TABLE `clasificacion` (
  `id_clasificacion` int(11) NOT NULL,
  `valor_clasificacion` int(11) NOT NULL,
  `descripcion_clasificacion` text COLLATE utf8mb4_spanish_ci NOT NULL,
  `id_servicio_C_FK` int(11) NOT NULL,
  `id_habitacion_C_FK` int(11) NOT NULL,
  `id_cliente_C_FK` int(11) NOT NULL,
  `id_hotel _C_FK` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cliente`
--

CREATE TABLE `cliente` (
  `cedula_cliente` int(11) NOT NULL,
  `nombre1_cliente` varchar(100) COLLATE utf8mb4_spanish_ci NOT NULL,
  `nombre2_cliente` varchar(100) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `apellido1_cliente` varchar(100) COLLATE utf8mb4_spanish_ci NOT NULL,
  `apellido2_cliente` varchar(100) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `telefono1_cliente` varchar(100) COLLATE utf8mb4_spanish_ci NOT NULL,
  `telefono2_cliente` varchar(100) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `fecha_nacimiento_cliente` date NOT NULL,
  `correo_electronico_cliente` varchar(100) COLLATE utf8mb4_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empresa`
--

CREATE TABLE `empresa` (
  `nit_empresa` varchar(100) COLLATE utf8mb4_spanish_ci NOT NULL,
  `nombre_empresa` varchar(100) COLLATE utf8mb4_spanish_ci NOT NULL,
  `telefono1_empresa` varchar(100) COLLATE utf8mb4_spanish_ci NOT NULL,
  `telefono2_empresa` varchar(100) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `correo_empresa` varchar(100) COLLATE utf8mb4_spanish_ci NOT NULL,
  `id_proveedor_E_FK` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `empresa`
--

INSERT INTO `empresa` (`nit_empresa`, `nombre_empresa`, `telefono1_empresa`, `telefono2_empresa`, `correo_empresa`, `id_proveedor_E_FK`) VALUES
('1107096543-3', 'wakanda Industry', '3183968868', NULL, 'reyesindustry@outlook.es', 1107096543),
('1107512738-8', 'mr_mokey', '8802002', '3772307', 'mr.monkey@outlook.es', 1107512738),
('1153875964-4', 'boatravel/3', '3233638029', NULL, 'boatravel@outlook.es', 1153875964);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `habitacion`
--

CREATE TABLE `habitacion` (
  `id_habitacion` int(11) NOT NULL,
  `capacidad_habitacion` int(11) NOT NULL,
  `checkout` time NOT NULL,
  `fecha_inicio_habitacion` date NOT NULL,
  `fecha_fin_habitacion` date NOT NULL,
  `checkin` time NOT NULL,
  `foto_habitacion` varchar(100) COLLATE utf8mb4_spanish_ci NOT NULL,
  `array_disponibilidad` longtext COLLATE utf8mb4_spanish_ci NOT NULL,
  `descripcion_habitacion` varchar(100) COLLATE utf8mb4_spanish_ci NOT NULL,
  `precio_habitacion` decimal(10,0) NOT NULL,
  `estado_habitacion` varchar(100) COLLATE utf8mb4_spanish_ci NOT NULL,
  `nit_hotel_H_FK` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `habitacion`
--

INSERT INTO `habitacion` (`id_habitacion`, `capacidad_habitacion`, `checkout`, `fecha_inicio_habitacion`, `fecha_fin_habitacion`, `checkin`, `foto_habitacion`, `array_disponibilidad`, `descripcion_habitacion`, `precio_habitacion`, `estado_habitacion`, `nit_hotel_H_FK`) VALUES
(1111, 4, '12:00:00', '2020-04-01', '2020-12-31', '14:00:00', '', '', 'hermosa habitación con dos camarotes', '20000', 'activa', 9090),
(2222, 4, '12:00:00', '2020-04-01', '2020-12-31', '14:00:00', '', '', 'hermosa habitación con  cuatro camas individuales', '20000', 'activa', 1010),
(3333, 4, '12:00:00', '2020-04-01', '2020-12-31', '14:00:00', '', '', 'hermosa habitación con dos camarotes', '10000', 'activa', 7070),
(4444, 3, '12:00:00', '2020-04-01', '2020-12-31', '14:00:00', '', '', 'hermosa habitación con camarote  y una cama individual', '15000', 'activa', 6060),
(5555, 3, '12:00:00', '2020-04-01', '2020-12-31', '14:00:00', '', '', 'hermosa habitación con camarote y una cama individual', '10000', 'activa', 2020),
(6666, 2, '12:00:00', '2020-04-01', '2020-12-31', '14:00:00', '', '', 'hermosa habitación con cama matrimonial', '15000', 'activa', 6060),
(6969, 5, '00:00:00', '2020-07-10', '2020-07-18', '18:06:00', '', '[\"Disponible\",\"Disponible\"]', 'iopppi', '1', '42', 1010),
(7777, 4, '12:00:00', '2020-04-01', '2020-12-31', '14:00:00', '', '', 'hermosa habitación con dos camarotes', '10000', 'activa', 7070),
(8888, 2, '12:00:00', '2020-04-01', '2020-12-31', '14:00:00', '', '', 'hermosa habitación con dos camarotes', '20000', 'activa', 2020),
(8987, 5, '00:00:00', '2020-06-28', '2020-07-31', '18:38:00', '', '[\"Disponible\",\"Disponible\",\"Disponible\",\"Disponible\",\"Disponible\",\"Disponible\",\"Disponible\",\"Disponible\",\"Disponible\",\"Disponible\",\"Disponible\",\"Disponible\",\"Disponible\",\"Disponible\",\"Disponible\",\"Disponible\",\"Disponible\",\"Disponible\",\"Disponible\",\"Disponible\",\"Disponible\",\"Disponible\",\"Disponible\",\"Disponible\",\"Disponible\",\"Disponible\",\"Disponible\",\"Disponible\",\"Disponible\",\"Disponible\",\"Disponible\",\"Disponible\",\"Disponible\"]', 'iopppi', '25422', '42', 1010),
(9999, 2, '12:00:00', '2020-04-01', '2020-12-31', '14:00:00', '', '', 'hermosa habitación con  cama individual', '20000', 'activa', 1010);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `habitacion_reserva`
--

CREATE TABLE `habitacion_reserva` (
  `id_habitacion_reserva` int(11) NOT NULL,
  `id_reserva_HR_FK` int(11) NOT NULL,
  `id_habitacion_HR_FK` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `hotel`
--

CREATE TABLE `hotel` (
  `matricula_hotel` int(11) NOT NULL,
  `nombre_hotel` varchar(100) COLLATE utf8mb4_spanish_ci NOT NULL,
  `ubicacion_hotel` varchar(100) COLLATE utf8mb4_spanish_ci NOT NULL,
  `telefono1_hotel` varchar(100) COLLATE utf8mb4_spanish_ci NOT NULL,
  `telefono2_hotel` varchar(100) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `descripcion_hotel` varchar(100) COLLATE utf8mb4_spanish_ci NOT NULL,
  `foto_hotel` varchar(100) COLLATE utf8mb4_spanish_ci NOT NULL,
  `direccion_hotel` varchar(100) COLLATE utf8mb4_spanish_ci NOT NULL,
  `nit_empresa_H_FK` varchar(100) COLLATE utf8mb4_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `hotel`
--

INSERT INTO `hotel` (`matricula_hotel`, `nombre_hotel`, `ubicacion_hotel`, `telefono1_hotel`, `telefono2_hotel`, `descripcion_hotel`, `foto_hotel`, `direccion_hotel`, `nit_empresa_H_FK`) VALUES
(1010, 'la parada hotel', 'ladrilleros', '3141652897', '3215647895', 'Es un gran hotel con vistas al mar y un mara villoso clima', 'pago.PNG', 'Crr 27 #50-37', '1107096543-3'),
(2020, 'el pri', 'la barra', '3112649878', NULL, '	\r\nEs un gran hotel con vistas al mar y un mara villos...', 'pago.PNG', 'Crr 27 #50-37', '1153875964-4'),
(3030, 'franco hotel', 'bahia malaga', '3102654728', NULL, '	\r\nEs un gran hotel con vistas al mar y un mara villos...', 'pago.PNG', 'Crr 27 #50-37', '1153875964-4'),
(4040, 'yubarta hotel', 'bahia malaga', '3196874523', NULL, '	\r\nEs un gran hotel con vistas al mar y un mara villos...', 'pago.PNG', 'Crr 27 #50-37', '1107096543-3'),
(5050, 'lo mas acido del pacifico', 'juanchaco', '3126549876', '3141652897', '	\r\nEs un gran hotel con vistas al mar y un mara villos...', 'pago.PNG', 'Crr 27 #50-37', '1107096543-3'),
(6060, 'gorila', 'la barra', '3178945624', NULL, '	\r\nEs un gran hotel con vistas al mar y un mara villos...', 'pago.PNG', 'Crr 27 #50-37', '1107512738-8'),
(7070, 'chimpance', 'ladrilleros', '3215647895', '3002564789', '	\r\nEs un gran hotel con vistas al mar y un mara villos...', 'pago.PNG', 'Crr 27 #50-37', '1107512738-8'),
(8080, 'orangutan', 'bahia malaga', '3216547987', NULL, '	\r\nEs un gran hotel con vistas al mar y un mara villos...', 'pago.PNG', 'Crr 27 #50-37', '1107512738-8'),
(9090, 'N y J', 'juanchaco', '3002564789', '3216547987', '	\r\nEs un gran hotel con vistas al mar y un mara villos...', 'pago.PNG', 'Crr 27 #50-37', '1153875964-4');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pago`
--

CREATE TABLE `pago` (
  `id_pago` int(11) NOT NULL,
  `numero_cuenta` int(11) NOT NULL,
  `entidad_bancaria` varchar(100) COLLATE utf8mb4_spanish_ci NOT NULL,
  `tipo_cuenta` varchar(100) COLLATE utf8mb4_spanish_ci NOT NULL,
  `valor_a_pagar` double NOT NULL,
  `id_reserva_P_FK` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `perfil_cliente`
--

CREATE TABLE `perfil_cliente` (
  `nombre_Usuario` varchar(100) COLLATE utf8mb4_spanish_ci NOT NULL,
  `correo_PC` varchar(100) COLLATE utf8mb4_spanish_ci NOT NULL,
  `contrasena` varchar(100) COLLATE utf8mb4_spanish_ci NOT NULL,
  `codigo_cliente` int(11) NOT NULL,
  `id_cliente_FK` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `perfil_proveedor`
--

CREATE TABLE `perfil_proveedor` (
  `cedula_proveedor` int(11) NOT NULL,
  `nombre_proveedor_perfil` varchar(100) COLLATE utf8mb4_spanish_ci NOT NULL,
  `contrasena_proveedor_perfil` varchar(100) COLLATE utf8mb4_spanish_ci NOT NULL,
  `nombre1_proveedor` varchar(100) COLLATE utf8mb4_spanish_ci NOT NULL,
  `nombre2_proveedor` varchar(100) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `apellido1_proveedor` varchar(100) COLLATE utf8mb4_spanish_ci NOT NULL,
  `apellido2_proveedor` varchar(100) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `telefono1_proveedor` varchar(100) COLLATE utf8mb4_spanish_ci NOT NULL,
  `telefono2_proveedor` varchar(100) COLLATE utf8mb4_spanish_ci DEFAULT NULL,
  `fecha_nacimiento_proveedor` date NOT NULL,
  `correo_electronico_proveedor` varchar(100) COLLATE utf8mb4_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `perfil_proveedor`
--

INSERT INTO `perfil_proveedor` (`cedula_proveedor`, `nombre_proveedor_perfil`, `contrasena_proveedor_perfil`, `nombre1_proveedor`, `nombre2_proveedor`, `apellido1_proveedor`, `apellido2_proveedor`, `telefono1_proveedor`, `telefono2_proveedor`, `fecha_nacimiento_proveedor`, `correo_electronico_proveedor`) VALUES
(1107096543, 'cristian1996', 'Auto1995', 'Cristian', 'Felipe', 'Reyes', 'Cortes', '3744201', NULL, '1996-03-19', 'ingeniero.reyes@uao.edu.co'),
(1107512738, 'johan1997', 'Auto81088', 'Johann', 'Damian', 'Montoya', 'Rubiano', '3233638029', NULL, '1997-10-14', 'johann.montoya@uo.edu.co'),
(1153875964, 'nicolas1995', 'Auto888', 'Nicolas', NULL, 'Franco', NULL, '31267958461', NULL, '1995-09-10', 'nicolas.franco@uao.edu.co');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reserva`
--

CREATE TABLE `reserva` (
  `id_reserva` int(11) NOT NULL,
  `fecha_inicio_reserva` date NOT NULL,
  `fecha_fin_reserva` date NOT NULL,
  `descuento_reserva` double NOT NULL,
  `estado_reserva` varchar(100) COLLATE utf8mb4_spanish_ci NOT NULL,
  `id_cliente_R_FK` int(11) NOT NULL,
  `id_empresa_R_FK` varchar(100) COLLATE utf8mb4_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `servicio`
--

CREATE TABLE `servicio` (
  `id_servicio` int(11) NOT NULL,
  `tipo_servicio` varchar(100) COLLATE utf8mb4_spanish_ci NOT NULL,
  `descripcion_servicio` varchar(100) COLLATE utf8mb4_spanish_ci NOT NULL,
  `precio_servicio` double NOT NULL,
  `id_hotel_S_FK` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `servicio_reserva`
--

CREATE TABLE `servicio_reserva` (
  `id_servicio_reserva` int(11) NOT NULL,
  `id_reserva_SR_FK` int(11) NOT NULL,
  `id_servicio_SR_FK` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `clasificacion`
--
ALTER TABLE `clasificacion`
  ADD PRIMARY KEY (`id_clasificacion`),
  ADD KEY `id_servicio_C_FK` (`id_servicio_C_FK`),
  ADD KEY `id_habitacion_C_FK` (`id_habitacion_C_FK`),
  ADD KEY `id_cliente_C_FK` (`id_cliente_C_FK`),
  ADD KEY `id_hotel _C_FK` (`id_hotel _C_FK`);

--
-- Indices de la tabla `cliente`
--
ALTER TABLE `cliente`
  ADD PRIMARY KEY (`cedula_cliente`);

--
-- Indices de la tabla `empresa`
--
ALTER TABLE `empresa`
  ADD PRIMARY KEY (`nit_empresa`),
  ADD KEY `id_proveedor_E_FK` (`id_proveedor_E_FK`);

--
-- Indices de la tabla `habitacion`
--
ALTER TABLE `habitacion`
  ADD PRIMARY KEY (`id_habitacion`),
  ADD KEY `id_hotel_H_FK` (`nit_hotel_H_FK`);

--
-- Indices de la tabla `habitacion_reserva`
--
ALTER TABLE `habitacion_reserva`
  ADD PRIMARY KEY (`id_habitacion_reserva`),
  ADD KEY `id_hotel_HR_FK` (`id_habitacion_HR_FK`),
  ADD KEY `id_reserva_HR_FK` (`id_reserva_HR_FK`);

--
-- Indices de la tabla `hotel`
--
ALTER TABLE `hotel`
  ADD PRIMARY KEY (`matricula_hotel`),
  ADD KEY `id_empresa_H_FK` (`nit_empresa_H_FK`);

--
-- Indices de la tabla `pago`
--
ALTER TABLE `pago`
  ADD PRIMARY KEY (`id_pago`),
  ADD KEY `id_reserva_P_FK` (`id_reserva_P_FK`);

--
-- Indices de la tabla `perfil_cliente`
--
ALTER TABLE `perfil_cliente`
  ADD PRIMARY KEY (`nombre_Usuario`),
  ADD KEY `id_cliente_FK` (`id_cliente_FK`);

--
-- Indices de la tabla `perfil_proveedor`
--
ALTER TABLE `perfil_proveedor`
  ADD PRIMARY KEY (`cedula_proveedor`);

--
-- Indices de la tabla `reserva`
--
ALTER TABLE `reserva`
  ADD PRIMARY KEY (`id_reserva`),
  ADD KEY `id_empresa_R_FK` (`id_empresa_R_FK`),
  ADD KEY `id_cliente_R_FK` (`id_cliente_R_FK`);

--
-- Indices de la tabla `servicio`
--
ALTER TABLE `servicio`
  ADD PRIMARY KEY (`id_servicio`),
  ADD KEY `id_hotel_S_FK` (`id_hotel_S_FK`);

--
-- Indices de la tabla `servicio_reserva`
--
ALTER TABLE `servicio_reserva`
  ADD PRIMARY KEY (`id_servicio_reserva`),
  ADD KEY `id_reserva_SR_FK` (`id_reserva_SR_FK`),
  ADD KEY `id_servicio_SR_FK` (`id_servicio_SR_FK`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `clasificacion`
--
ALTER TABLE `clasificacion`
  MODIFY `id_clasificacion` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `cliente`
--
ALTER TABLE `cliente`
  MODIFY `cedula_cliente` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `habitacion`
--
ALTER TABLE `habitacion`
  MODIFY `id_habitacion` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=554548;

--
-- AUTO_INCREMENT de la tabla `habitacion_reserva`
--
ALTER TABLE `habitacion_reserva`
  MODIFY `id_habitacion_reserva` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `servicio`
--
ALTER TABLE `servicio`
  MODIFY `id_servicio` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `servicio_reserva`
--
ALTER TABLE `servicio_reserva`
  MODIFY `id_servicio_reserva` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `clasificacion`
--
ALTER TABLE `clasificacion`
  ADD CONSTRAINT `clasificacion_ibfk_1` FOREIGN KEY (`id_hotel _C_FK`) REFERENCES `hotel` (`matricula_hotel`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `clasificacion_ibfk_2` FOREIGN KEY (`id_cliente_C_FK`) REFERENCES `cliente` (`cedula_cliente`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `clasificacion_ibfk_3` FOREIGN KEY (`id_servicio_C_FK`) REFERENCES `servicio` (`id_servicio`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `clasificacion_ibfk_4` FOREIGN KEY (`id_habitacion_C_FK`) REFERENCES `habitacion` (`id_habitacion`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `empresa`
--
ALTER TABLE `empresa`
  ADD CONSTRAINT `empresa_ibfk_1` FOREIGN KEY (`id_proveedor_E_FK`) REFERENCES `perfil_proveedor` (`cedula_proveedor`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `habitacion`
--
ALTER TABLE `habitacion`
  ADD CONSTRAINT `habitacion_ibfk_1` FOREIGN KEY (`nit_hotel_H_FK`) REFERENCES `hotel` (`matricula_hotel`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `habitacion_reserva`
--
ALTER TABLE `habitacion_reserva`
  ADD CONSTRAINT `habitacion_reserva_ibfk_1` FOREIGN KEY (`id_habitacion_HR_FK`) REFERENCES `habitacion` (`id_habitacion`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `habitacion_reserva_ibfk_2` FOREIGN KEY (`id_reserva_HR_FK`) REFERENCES `reserva` (`id_reserva`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `hotel`
--
ALTER TABLE `hotel`
  ADD CONSTRAINT `hotel_ibfk_1` FOREIGN KEY (`nit_empresa_H_FK`) REFERENCES `empresa` (`nit_empresa`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `pago`
--
ALTER TABLE `pago`
  ADD CONSTRAINT `pago_ibfk_1` FOREIGN KEY (`id_reserva_P_FK`) REFERENCES `reserva` (`id_reserva`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `perfil_cliente`
--
ALTER TABLE `perfil_cliente`
  ADD CONSTRAINT `perfil_cliente_ibfk_1` FOREIGN KEY (`id_cliente_FK`) REFERENCES `cliente` (`cedula_cliente`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `reserva`
--
ALTER TABLE `reserva`
  ADD CONSTRAINT `reserva_ibfk_1` FOREIGN KEY (`id_cliente_R_FK`) REFERENCES `cliente` (`cedula_cliente`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `reserva_ibfk_2` FOREIGN KEY (`id_empresa_R_FK`) REFERENCES `empresa` (`nit_empresa`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `servicio`
--
ALTER TABLE `servicio`
  ADD CONSTRAINT `servicio_ibfk_1` FOREIGN KEY (`id_hotel_S_FK`) REFERENCES `hotel` (`matricula_hotel`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `servicio_reserva`
--
ALTER TABLE `servicio_reserva`
  ADD CONSTRAINT `servicio_reserva_ibfk_1` FOREIGN KEY (`id_reserva_SR_FK`) REFERENCES `reserva` (`id_reserva`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `servicio_reserva_ibfk_2` FOREIGN KEY (`id_servicio_SR_FK`) REFERENCES `servicio` (`id_servicio`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
