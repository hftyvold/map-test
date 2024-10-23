import streamlit as st
from my_map_component import show_map

st.title("Show Your Position on a Map")

# Get the user's location using the custom component
location = show_map()

# Display the user's location
if location:
    st.write(f"Your location: {location['latitude']}, {location['longitude']}")
