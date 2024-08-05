
import './Sidebar.css'
import { assets } from "../../assets/assets"
import { NavLink } from 'react-router-dom'

export const SideBar = () => {
  return (
    <div className="sidebar">
        <div className="sidebar-options">
            <div className="sidebar-options-add">
                <h2>Add Items</h2>
                <NavLink to='/addcake' className="sidebar-option">
                    <img src={assets.add_icon} alt="" />
                    <p className="sidebar-big">Add Cake</p>
                    <p className="sidebar-small">Cake</p>
                </NavLink>
                <NavLink to='/addgift' className="sidebar-option">
                    <img src={assets.add_icon} alt="" />
                    <p className="sidebar-big">Add Gift</p>
                    <p className="sidebar-small">Gift</p>
                </NavLink>
                <NavLink to='/addflower' className="sidebar-option">
                    <img src={assets.add_icon} alt="" />
                    <p className="sidebar-big">Add Flower</p>
                    <p className="sidebar-small">Flower</p>
                </NavLink>
                <NavLink to='/addcombo' className="sidebar-option">
                    <img src={assets.add_icon} alt="" />
                    <p className="sidebar-big">Add Combo</p>
                    <p className="sidebar-small">Combo</p>
                </NavLink>
            </div>
            <div className="sidebar-options-list">
                <h2>List Items</h2>
                <NavLink to='/listcakes' className="sidebar-option">
                    <img src={assets.order_icon} alt="" />
                    <p className="sidebar-big">List Cakes</p>
                    <p className="sidebar-small">Cake</p>
                </NavLink>
                <NavLink to='/listgifts' className="sidebar-option">
                    <img src={assets.order_icon} alt="" />
                    <p className="sidebar-big">List Gifts</p>
                    <p className="sidebar-small">Gift</p>
                </NavLink>
                <NavLink to='/listflowers' className="sidebar-option">
                    <img src={assets.order_icon} alt="" />
                    <p className="sidebar-big">List Flowers</p>
                    <p className="sidebar-small">Flower</p>
                </NavLink>
                <NavLink to='/listcombos' className="sidebar-option">
                    <img src={assets.order_icon} alt="" />
                    <p className="sidebar-big">List Combos</p>
                    <p className="sidebar-small">Combo</p>
                </NavLink>
            </div>
            <div className="sidebar-options-order">
                <h2>Orders</h2>
                <NavLink to='/order' className="sidebar-option">
                    <img src={assets.order_icon} alt="" />
                    <p>Order</p>
                </NavLink>
            </div>        
        </div>
    </div>
  )
}


