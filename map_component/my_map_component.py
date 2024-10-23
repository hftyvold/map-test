import os
import streamlit as st
import streamlit.components.v1 as components

# Declare the Streamlit component only once
_component_func = components.declare_component(
    "my_map_component",  # The name
    path=os.path.join(os.path.dirname(__file__), "frontend/build")  # Path to the frontend build
)

def show_map():
    return _component_func()
