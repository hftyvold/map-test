from .my_map_component import show_map

import streamlit.components.v1 as components

my_map_component = components.declare_component(
    "my_map_component",
    path="my_map_component/frontend/build"  # This should point to the build directory
)
