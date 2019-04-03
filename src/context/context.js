import React, { Component } from "react";

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    sidebarOpen: false,
    cartOpen: false,
    cartItems: 0
  };
  // handle sidebar
  handleSidebar = () => {
    this.setState({ sidebarOpen: !this.state.sidebarOpen });
  };
  // handle Cart
  handleCart = () => {
    this.setState({ sidebarOpen: !this.state.cartOpen });
  };
  // handle close Cart
  closeCart = () => {
    this.setState({ sidebarOpen: false });
  };
  // handle open Cart
  openCart = () => {
    this.setState({ sidebarOpen: true });
  };
  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleSideBar: this.handleSidebar,
          handleCart: this.setState.handleCart,
          closeCart: this.closeCart,
          openCart: this.openCart
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}
const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
