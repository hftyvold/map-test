import os
import streamlit.components.v1 as components

# Create a Streamlit component to render the map
_component_func = components.declare_component(
    "my_map_component",
    path="/workspaces/map-test/my_map_component/frontend/build"
)

def show_map():
    # Call the frontend component and get the user's location
    location = _component_func()
    return location
