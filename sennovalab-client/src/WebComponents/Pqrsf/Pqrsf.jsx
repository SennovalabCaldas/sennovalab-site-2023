import React, { useState } from "react";
import { Form, Input, Button, Radio } from "antd";
import { motion } from "framer-motion";
import { image } from "../../assets";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import { BackToColor } from "../../AdminComponents/BackToColor/BackToColor";

export const Pqrsf = () => {
  const [editorState, setEditorState] = useState("");

  const handleChangeEditor = (value) => {
    setEditorState(value);
  };

  const handleImageUpload = (file) => {
    return new Promise((resolve, reject) => {
      const imageUrl = "https://via.placeholder.com/150";
      resolve(imageUrl);
    });
  };

  const modules = {
    toolbar: {
      container: [
        [{ header: [1, 2, false] }],
        ["bold", "italic", "underline", "strike", "blockquote"],
        [{ list: "ordered" }, { list: "bullet" }],
        ["link", "image"],
        ["clean"],
      ],
      handlers: {
        image: handleImageUpload,
      },
    },
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "link",
    "image",
  ];

  const onFinish = async (values) => {
    try {
      const data = {
        email: values.email,
        current_password: values.current_password,
        additionalComments: editorState,
      };
      const response = await fetch("http://localhost:5000/enviar-correo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log("Correo enviado con éxito");
      } else {
        console.error("Error al enviar el correo");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div
      className="login-right"
      style={{
        backgroundColor: "#fff",
        padding: "20px",
        borderRadius: "5px",
        boxShadow: "0 0 10px rgba(0,0,0,0.2)",
        maxWidth: "600px",
        margin: "auto",
        marginTop: "40px",
        textAlign: "center",
      }}
    >
      <BackToColor />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          src={image.logo}
          alt="logo"
          style={{
            width: "300px",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </motion.div>
      <Form
        name="basic"
        style={{
          maxWidth: 650,
          margin: "0",
          fontSize: "12px",
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item>
          <h2>¿Qué significa PQRFS?</h2>
          <p>
            <strong>P:</strong> Petición
          </p>
          <p>
            <strong>Q:</strong> Queja
          </p>
          <p>
            <strong>R:</strong> Reclamo
          </p>
          <p>
            <strong>F:</strong> Felicitación
          </p>
          <p>
            <strong>S:</strong> Sugerencia
          </p>
        </Form.Item>

        <Form.Item
          name="type"
          label="Tipo de PQRFS"
          rules={[{ required: true }]}
        >
          <Radio.Group>
            <Radio value="petition">Petición</Radio>
            <Radio value="complaint">Queja</Radio>
            <Radio value="claim">Reclamo</Radio>
            <Radio value="congratulation">Felicitación</Radio>
            <Radio value="suggestion">Sugerencia</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item name="email" label="Correo Electrónico">
          <Input />
        </Form.Item>

        <Form.Item name="additionalComments" label="Comentarios Adicionales">
          <ReactQuill value={editorState} onChange={handleChangeEditor} />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Enviar PQRFS
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
