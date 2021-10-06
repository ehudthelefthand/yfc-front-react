import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import {
    AppBar,
    Toolbar,
    IconButton, 
    Typography,
    Container,
    Box,
    FormControl,
    FormLabel,
    FormControlLabel,
    Radio,
    RadioGroup,
} from '@mui/material';
import {
    Menu as MenuIcon,
    AccountCircle,
} from '@mui/icons-material'

const paymentType = {
    TRANSFER: 'TRANSFER',
    CHEQUE: 'CHEQUE'
}

export default function Give() {
    const { t } = useTranslation()
    const [ form, setForm ] = useState({
        paymentType: paymentType.TRANSFER
    })

    return (
        <Box>
            <AppBar position="fixed">
                <Toolbar>
                    <IconButton 
                        color="inherit"
                        edge="start"
                        size="large"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography flexGrow={1} variant="h6">
                        { t('appHeader.give') }
                    </Typography>
                    <IconButton color="inherit">
                        <AccountCircle />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Container sx={{ mt: 12 }}>
                <FormControl component="fieldset">
                    <FormLabel component="legend">{t('givePage.form.paymentType')}</FormLabel>
                    <RadioGroup defaultValue={form.paymentType}>
                        <FormControlLabel value={paymentType.TRANSFER} control={<Radio />} label={t('givePage.form.transfer')} />
                        <FormControlLabel value={paymentType.CHEQUE} control={<Radio />} label={t('givePage.form.cheque')} />
                    </RadioGroup>
                </FormControl>
            </Container>
        </Box>
    )
}
