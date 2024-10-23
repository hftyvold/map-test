import streamlit.components.v1 as components

# Create a Streamlit component to render the map
if "_component_func" not in st.session_state:
    _component_func = components.declare_component(
        "my_map_component",
        path="my_map_component/frontend/build"
    )
    st.session_state._component_func = _component_func

def show_map():
    return _component_func()
