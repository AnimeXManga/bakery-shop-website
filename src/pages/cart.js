import { connect } from "react-redux";
import React, { Component } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

import { Table, Input, Button} from "antd";
import Highlighter from "react-highlight-words";

import { addCart, subtractCart, deleteCart } from "../redux/cart/cart-actions";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const mapStateToProps = (state) => ({
  _products: state.cart._products,
  Carts: state.cart.Carts,
});
const mapDispatchToProps = {
  addCart,
  subtractCart,
  deleteCart,
};
class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
      searchedColumn: "",
    };
  }
  addCart = (product) => {
    this.props.addCart(product);
  };
  subtractCart = (product) => {
    this.props.subtractCart(product);
  };
  deleteCart = (product) => {
    this.props.deleteCart(product);
  };
  getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={(node) => {
            this.searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() =>
            this.handleSearch(selectedKeys, confirm, dataIndex)
          }
          style={{ width: 188, marginBottom: 8, display: "block" }}
        />
        <Button
          type="primary"
          onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
          size="small"
          style={{ width: 90, marginRight: 8 }}
        >
          Search
          <SearchOutlined />
        </Button>
        <Button
          onClick={() => this.handleReset(clearFilters)}
          size="small"
          style={{ width: 90 }}
        >
          Reset
        </Button>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        type="search"
        style={{ color: filtered ? "#1890ff" : undefined }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(() => this.searchInput.select());
      }
    },
    render: (text) =>
      this.state.searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
          searchWords={[this.state.searchText]}
          autoEscape
          textToHighlight={text.toString()}
        />
      ) : (
        text
      ),
  });

  handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    this.setState({
      searchText: selectedKeys[0],
      searchedColumn: dataIndex,
    });
  };
  handleReset = (clearFilters) => {
    clearFilters();
    this.setState({ searchText: "" });
  };

  render() {
    const { Carts } = this.props;
    console.log(Carts);

    var total = 0;
    const dataSource = Object(Carts).map((item, index) => {
      total = total + parseInt(item.fields.price) * parseInt(item.quantity);
      return {
        ...item,
        id: index,
        name: item.fields.name,
        image: item.fields.images["0"].fields.file.url,
        price: item.fields.price,
        quantity: item.quantity,
        total: item.fields.price * item.quantity,
      };
    });
    const columns = [
      {
        title: "ID",
        dataIndex: "id",
        key: "id",
        align: "center",
        responsive: ['md'],
      },
      {
        title: "Name",
        dataIndex: "name",
        key: "name",
        align: "center",
        ...this.getColumnSearchProps("name"),
        render: (text, row) => <p className="name-table">{row.name}</p>,
      
      },
      {
        title: "Image",
        dataIndex: "image",
        key: "image",
        align: "center",
        render: (text, row) => (
          console.log(row.image),
          (<img className="cake-image-cart" src={row.image} alt="cake" />)
        ),
        responsive: ['md'],
      },
      {
        title: "Price",
        dataIndex: "price",
        key: "price",
        align: "center",
        sorter: (a, b) => a.price - b.price,
        render: (text, row) => <p>${row.price}</p>,
      
      },
      {
        title: "Quantity",
        dataIndex: "quantity",
        key: "quantity",
        align: "center",
        render: (text, row) => (
          <div>
            <Button onClick={() => this.subtractCart(dataSource[row.id])}>
              -
            </Button>
            <span />
            <Button>{dataSource[row.id].quantity}</Button>
            <Button onClick={() => this.addCart(dataSource[row.id])}>+</Button>
          </div>
        ),
      
      },
      {
        title: "Total Price",
        key: "total_price",
        dataIndex: "total_price",
        align: "center",
        render: (text, row) => (
          <p>${parseInt(row.quantity) * parseInt(row.price)}</p>
        ),
        responsive: ['md'],
      },
      {
        title: "Action",
        dataIndex: "action",
        key: "action",
        align: "center",
        render: (text, row) => (
          <Button 
            onClick={() => this.deleteCart(dataSource[row.id])} 
            danger
            >
            Delete
          </Button>
        ),
      },
    ];

    return (
      <>
        <Navbar />
        <div className="container" id="cart">
          <Table
            style={{ textAlign: "left", color: "crimson" }}
            bordered
            title={() => "Your Cart"}
            footer={(text, row) => `Total: $${total}`}
            columns={columns}
            dataSource={dataSource}
          />
          <Link to="/payment"> {/* duoc thi dung redirect */}
          <button className="btn btn-primary" id="btn-payment">Check Out</button>
          </Link>
          <Link to="/products">
          <button className="btn btn-primary" id="btn-back">Continue Shopping</button>        
          </Link>
    </div>

        <Footer />
      </>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
