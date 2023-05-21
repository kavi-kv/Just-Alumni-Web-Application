
import { Dialog } from '@mui/material'
import React from 'react'

export default function ForgotModal(props) {
  return (
    <div>
<Dialog open={props.openForgot}>
{props.children}
</Dialog>

    </div>
  )
}
