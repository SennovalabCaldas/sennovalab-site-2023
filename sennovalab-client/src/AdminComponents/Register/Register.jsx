import { Button, Form, Input, Result, Select, Steps, Switch } from "antd";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { image } from "../../assets";
import { BackTo } from "../BackTo/BackTo";

const { Option } = Select;
const { Step } = Steps;

export const Register = () => {
  const [userType, setUserType] = useState("");
  const [currentStep, setCurrentStep] = useState(0);
  const [worksAtSena, setWorksAtSena] = useState(false);

  const handleUserTypeChange = (value) => {
    setUserType(value);
  };

  const [form] = Form.useForm();

  const handleRegionChange = (value) => {
    form.setFieldsValue({
      center: undefined,
    });
  };

  const handleSwitchChange = (checked) => {
    setWorksAtSena(checked);
    console.log(`switch to ${checked}`);
  };

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const onChange = (value) => {
    console.log("onChange:", value);
    setCurrentStep(value);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          margin: "0 auto",
          backgroundImage: `url(${image.background2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
        }}
      >
        <BackTo />
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          style={{
            backgroundColor: "rgb(0 0 0 / 33%)",
            padding: "20px",
            borderRadius: "5px",
            boxShadow: "rgb(0 0 0) 0px 0px 10px",
            maxWidth: "650px",
            margin: "auto",
            marginTop: "0",
            textAlign: "center",
            width: "100%",
            fontSize: "12px",
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={image.logo}
              alt="logo"
              style={{
                width: "260px",
                height: "145px",
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          </motion.div>
          <h3
            style={{
              color: "black",
              fontFamily: "sans-serif",
              fontWeight: "bold",
              fontSize: "14px",
              marginBottom: "20px",
            }}
          >
            Antes de iniciar, selecciona el tipo de usuario que eres:
          </h3>
          <Select
            placeholder="Seleccionar tipo de usuario"
            style={{ width: "100%", marginBottom: "20px" }}
            onChange={handleUserTypeChange}
          >
            <Option value="persona">Persona Natural</Option>
            <Option value="empresa">Empresa</Option>
          </Select>

          <Steps
            current={currentStep}
            onChange={onChange}
            style={{ marginBottom: "20px" }}
          >
            <Step title="Datos básicos" />
            <Step title="Paso 2" />
            <Step title="Finalización" />
          </Steps>
          {userType === "persona" && currentStep === 0 && (
            <Form
              form={form}
              name="basic"
              style={{
                maxWidth: 600,
                margin: "0",
                padding: "20px",
                borderRadius: "5px",
                boxShadow: "#ffffff30 0px 0px 10px",
                backgroundColor: "#ebebeb52",
                paddingBottom: "40px",
              }}
              initialValues={{
                remember: true,
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Form.Item
                  label="Nombre"
                  name="name"
                  rules={[
                    {
                      required: true,
                      message: "Por favor ingrese su nombre!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Apellidos"
                  name="last_name"
                  rules={[
                    {
                      required: true,
                      message: "Por favor ingrese sus apellidos!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Form.Item
                  label="Tipo de Documento"
                  name="document_type"
                  rules={[
                    {
                      required: true,
                      message: "Por favor seleccione el tipo de documento",
                    },
                  ]}
                >
                  <Select placeholder="Seleccionar tipo de documento">
                    <Option value="cc">C.C.</Option>
                    <Option value="ce">C.E.</Option>
                    <Option value="ce">Pasaporte</Option>
                    <Option value="ce">P.E.P.</Option>
                  </Select>
                </Form.Item>

                <Form.Item
                  label="N° de Documento"
                  name="document_number"
                  rules={[
                    {
                      required: true,
                      message: "Por favor ingrese su número de documento",
                    },
                    {
                      max: 11,
                      message:
                        "El número de documento no puede tener más de 11 dígitos",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </div>
              <Form.Item
                label="Correo"
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Por favor ingrese su correo!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Número Celular"
                name="phone"
                rules={[
                  {
                    required: true,
                    message: "Por favor ingrese su número celular!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Form.Item
                  label="Departamento"
                  name="department"
                  rules={[
                    {
                      required: true,
                      message: "Por favor ingrese su departamento!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Ciudad"
                  name="city"
                  rules={[
                    {
                      required: true,
                      message: "Por favor ingrese su ciudad!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </div>
              <Form.Item>
                <Button type="primary" onClick={nextStep}>
                  Siguiente
                </Button>
              </Form.Item>
            </Form>
          )}

          {userType === "persona" && currentStep === 1 && (
            <Form
              form={form}
              name="step2"
              style={{
                maxWidth: 650,
                margin: "0",
                padding: "20px",
                borderRadius: "5px",
                boxShadow: "#ffffff30 0px 0px 10px",
                backgroundColor: "#ebebeb52",
              }}
              initialValues={{
                remember: true,
              }}
            >
              <Form.Item
                label="Trabaja en el Sena"
                name="works_at_sena"
                valuePropName="checked"
              >
                <Switch onChange={handleSwitchChange} />
              </Form.Item>

              {worksAtSena ? (
                <>
                  <Form.Item
                    label="Regional"
                    name="region"
                    rules={[
                      {
                        required: true,
                        message: "Por favor seleccione la regional!",
                      },
                    ]}
                  >
                    <Select
                      placeholder="Seleccionar regional"
                      onChange={handleRegionChange}
                    >
                      {/* Agrega las opciones de las regionales según tus necesidades */}
                      <Option value="regional1">Regional 1</Option>
                      <Option value="regional2">Regional 2</Option>
                      {/* ... Agrega más opciones según sea necesario ... */}
                    </Select>
                  </Form.Item>

                  <Form.Item
                    label="Centro de Formación"
                    name="center"
                    rules={[
                      {
                        required: true,
                        message: "Por favor seleccione el centro de formación!",
                      },
                    ]}
                  >
                    <Select placeholder="Seleccionar centro de formación">
                      {/* Agrega las opciones de los centros de formación basados en la región seleccionada */}
                      <Option value="centro1">Centro de Formación 1</Option>
                      <Option value="centro2">Centro de Formación 2</Option>
                      {/* ... Agrega más opciones según sea necesario ... */}
                    </Select>
                  </Form.Item>
                </>
              ) : (
                <Form.Item
                  label="Nombre de la Empresa"
                  name="company_name"
                  rules={[
                    {
                      required: true,
                      message: "Por favor ingrese el nombre de la empresa!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              )}

              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Registrarse
                </Button>
              </Form.Item>
            </Form>
          )}

          {userType === "persona" && currentStep === 2 && (
            <Result
              style={{
                maxWidth: 650,
                margin: "0",
                padding: "20px",
                borderRadius: "5px",
                boxShadow: "#ffffff30 0px 0px 10px",
                backgroundColor: "#ebebeb52",
                paddingBottom: "40px",
              }}
              title="Registro exitoso."
              subTitle="Te enviaremos un correo con las instrucciones para activar tu cuenta."
              extra={
                <Button type="primary" key="console">
                  Regresar
                </Button>
              }
            />
          )}

          {userType === "empresa" && currentStep === 0 && (
            <Form
              form={form}
              name="basic"
              style={{
                maxWidth: 600,
                margin: "0",
                padding: "20px",
                borderRadius: "5px",
                boxShadow: "#ffffff30 0px 0px 10px",
                backgroundColor: "#ebebeb52",
                paddingBottom: "40px",
              }}
              initialValues={{
                remember: true,
              }}
            >
              <Form.Item
                label="Nombre de la Empresa"
                name="company_name"
                rules={[
                  {
                    required: true,
                    message: "Por favor ingrese el nombre de la empresa!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Correo"
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Por favor ingrese su correo!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Form.Item
                  label="Departamento"
                  name="department"
                  rules={[
                    {
                      required: true,
                      message: "Por favor ingrese su departamento!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Ciudad"
                  name="city"
                  rules={[
                    {
                      required: true,
                      message: "Por favor ingrese su ciudad!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </div>
              <Form.Item>
                <Button type="primary" onClick={nextStep}>
                  Siguiente
                </Button>
              </Form.Item>
            </Form>
          )}

          {userType === "empresa" && currentStep === 1 && (
            <Form
              form={form}
              name="step2"
              style={{
                maxWidth: 650,
                margin: "0",
                padding: "20px",
                borderRadius: "5px",
                boxShadow: "#ffffff30 0px 0px 10px",
                backgroundColor: "#ebebeb52",
              }}
              initialValues={{
                remember: true,
              }}
            >
              <Form.Item
                label="Nombre"
                name="name"
                rules={[
                  {
                    required: true,
                    message: "Por favor ingrese su nombre!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Número Celular"
                name="phone"
                rules={[
                  {
                    required: true,
                    message: "Por favor ingrese su número celular!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Form.Item
                  label="Número Teléfono"
                  name="phone"
                  rules={[
                    {
                      required: true,
                      message: "Por favor ingrese su número de teléfono!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="Extensión"
                  name="phone"
                  rules={[
                    {
                      required: true,
                      message: "Por favor ingrese su número de teléfono!",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </div>
            </Form>
          )}

          {userType === "empresa" && currentStep === 2 && (
            <Result
              style={{
                maxWidth: 650,
                margin: "0",
                padding: "20px",
                borderRadius: "5px",
                boxShadow: "#ffffff30 0px 0px 10px",
                backgroundColor: "#ebebeb52",
                paddingBottom: "40px",
              }}
              title="Registro exitoso."
              subTitle="Te enviaremos un correo con las instrucciones para activar tu cuenta."
              extra={
                <Button type="primary" key="console">
                  Regresar
                </Button>
              }
            />
          )}
        </motion.div>
      </div>
    </>
  );
};
