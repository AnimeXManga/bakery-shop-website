import React from "react";
import {Link} from "react-router-dom"
import { PageHeader, Form, Input, Table, Row, Col } from "antd";
import { StepPanel } from "./stepPanel";
import CardCredit  from './CardCredit';
function MyStepForm() {
   
  const [stepForm] = Form.useForm();
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      align: "center",
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      align: "center",
    },
    {
      title: "Total",
      dataIndex: "total",
      align: "center",
    },
  ];
  const data = [
    {
      key: "1" /* id ne */,
      name: "Cake" /* ten banh ne */,
      quantity: 2 /* so luong banh */,
      total: `$${"130"}` /* tong gia tinh tren tung loai banh * so luong banh */,
    },
    {
      key: "2",
      name: "Cake",
      quantity: 42,
      total: `$${"130"}`,
    },
    {
      key: "3",
      name: "Cake",
      quantity: 32,
      total: `$${"130"}`,
    },
  ];
  const Step1Form = () => {
    return (
      <>
        <div className="container">
          <h5 className="title">Sumary</h5>
          <Table
            columns={columns}
            dataSource={data}
            size="small"
            footer={() => `Total: $${"100"}`}
          />
        </div>
      </>
    );
  };

  const Step2Form = () => {
    return (
      <>
        <div className="container">
          <div className="inforUser">
          <h5 className="title">User Detail</h5>
          <Row>
            <Col xs={24} xl={12}>
              <Form.Item name={["user", "name"]} label="Name">
                <Input />
              </Form.Item>
              <Form.Item
                name={["user", "email"]}
                label="Email"
                rules={[{ type: "email" }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name={["user", "phone"]}
                label="Phone"
                rules={[{ type: "phone" }]}
              >
                <Input />
              </Form.Item>
              <Form.Item name={["user", "address"]} label="Address">
                <Input />
              </Form.Item>
              <Form.Item name={["user", "city"]} label="City">
                <Input />
              </Form.Item>
              <Form.Item
                name={["user", "cmnnd"]}
                label="Cmnd"
                rules={[{ type: "number" }]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col xs={24} xl={12}>
                <CardCredit/>
            </Col>
          </Row>
        </div>
        </div>
      </>
    );
  };
  const Step3Form = () =>{
      return(
        <>ahaiahia</>
      );
  };

  const onFinish = (fieldsValue) => {
    const formData = stepForm.getFieldsValue();

    // POST the data to backend and show Notification
    console.log(formData);
  };

  const steps = [
    {
      step: 1,
      title: "Step1",
      content: <Step1Form />,
    },
    {
      step: 2,
      title: "Step2",
      content: <Step2Form />,
    },
    {
        step: 3,
        title: "Finished",
        content: <Step3Form/>,
    }
  ];
  return (
    <PageHeader title="Payment" id="page-header">
      <Form form={stepForm} onFinish={onFinish}>
        <StepPanel steps={steps} />
      </Form>
      <Link to="/cart">
          <button className="btn btn-primary" id="btn-back">Back To Cart</button>        
          </Link>
    </PageHeader>
  );
}
export { MyStepForm };
