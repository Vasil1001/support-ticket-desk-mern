import React from 'react'
import { connect } from 'react-redux'

import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {},
})
export const store = (props) => {
  return (
    <div>store</div>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(store)