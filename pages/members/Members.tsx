'use client'

import React, { useState } from 'react'
import {
  Button,
  Card,
  CardContent,
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from '@mui/material'
import Grid from '@mui/material/Grid';



export default function ReportForm() {
  // Estados
  const [imgSrc, setImgSrc] = useState('/placeholder.png')
  const [fileInput, setFileInput] = useState('')
  const [language, setLanguage] = useState<string[]>([])
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    organization: '',
    phoneNumber: '',
    address: '',
    state: '',
    zipCode: '',
    country: '',
    timezone: '',
    currency: '',
  })

  const languageData = ['English', 'Spanish', 'French', 'German', 'Chinese']

  // Manejadores
  const handleFormChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleFileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return
    setFileInput(event.target.value)
    const reader = new FileReader()
    reader.onload = () => setImgSrc(reader.result as string)
    reader.readAsDataURL(file)
  }

  const handleFileInputReset = () => {
    setFileInput('')
    setImgSrc('/placeholder.png')
  }

  const handleChange = (event: SelectChangeEvent<string[]>) => {
    const value = event.target.value as string[]
    setLanguage(typeof value === 'string' ? value.split(',') : value)
  }

  const handleDelete = (lang: string) => {
    setLanguage(prev => prev.filter(l => l !== lang))
  }

  const handleReset = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      organization: '',
      phoneNumber: '',
      address: '',
      state: '',
      zipCode: '',
      country: '',
      timezone: '',
      currency: '',
    })
    setLanguage([])
  }

  // Render
  return (
    <Card>

      <CardContent>
        <form onSubmit={e => e.preventDefault()}>
          <Grid container spacing={5}>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                label="First Name"
                value={formData.firstName}
                placeholder="John"
                onChange={e => handleFormChange('firstName', e.target.value)}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                label="Last Name"
                value={formData.lastName}
                placeholder="Doe"
                onChange={e => handleFormChange('lastName', e.target.value)}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                label="Email"
                value={formData.email}
                placeholder="john.doe@gmail.com"
                onChange={e => handleFormChange('email', e.target.value)}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                label="Organization"
                value={formData.organization}
                placeholder="ThemeSelection"
                onChange={e => handleFormChange('organization', e.target.value)}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                label="Phone Number"
                value={formData.phoneNumber}
                placeholder="+1 (234) 567-8901"
                onChange={e => handleFormChange('phoneNumber', e.target.value)}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                label="Address"
                value={formData.address}
                placeholder="Address"
                onChange={e => handleFormChange('address', e.target.value)}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                label="State"
                value={formData.state}
                placeholder="New York"
                onChange={e => handleFormChange('state', e.target.value)}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                type="number"
                label="Zip Code"
                value={formData.zipCode}
                placeholder="123456"
                onChange={e => handleFormChange('zipCode', e.target.value)}
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <FormControl fullWidth>
                <InputLabel>Country</InputLabel>
                <Select
                  label="Country"
                  value={formData.country}
                  onChange={e => handleFormChange('country', e.target.value)}
                >
                  <MenuItem value="usa">USA</MenuItem>
                  <MenuItem value="uk">UK</MenuItem>
                  <MenuItem value="australia">Australia</MenuItem>
                  <MenuItem value="germany">Germany</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <FormControl fullWidth>
                <InputLabel>Language</InputLabel>
                <Select
                  multiple
                  label="Language"
                  value={language}
                  onChange={handleChange}
                  renderValue={selected => (
                    <div className="flex flex-wrap gap-2">
                      {(selected as string[]).map(value => (
                        <Chip
                          key={value}
                          clickable
                          deleteIcon={
                            <i className="ri-close-circle-fill" onMouseDown={event => event.stopPropagation()} />
                          }
                          size="small"
                          label={value}
                          onDelete={() => handleDelete(value)}
                        />
                      ))}
                    </div>
                  )}
                >
                  {languageData.map(name => (
                    <MenuItem key={name} value={name}>
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <FormControl fullWidth>
                <InputLabel>TimeZone</InputLabel>
                <Select
                  label="TimeZone"
                  value={formData.timezone}
                  onChange={e => handleFormChange('timezone', e.target.value)}
                  MenuProps={{ PaperProps: { style: { maxHeight: 250 } } }}
                >
                  <MenuItem value="gmt-08-baja">(GMT-08:00) Tijuana, Baja California</MenuItem>
                  <MenuItem value="gmt-06-mc">(GMT-06:00) Guadalajara, Mexico City, Monterrey</MenuItem>
                  <MenuItem value="gmt-05-et">(GMT-05:00) Eastern Time (US & Canada)</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <FormControl fullWidth>
                <InputLabel>Currency</InputLabel>
                <Select
                  label="Currency"
                  value={formData.currency}
                  onChange={e => handleFormChange('currency', e.target.value)}
                >
                  <MenuItem value="usd">USD</MenuItem>
                  <MenuItem value="euro">EUR</MenuItem>
                  <MenuItem value="pound">Pound</MenuItem>
                  <MenuItem value="bitcoin">Bitcoin</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid size={{ xs: 12 }} className="flex gap-4 flex-wrap">
              <Button variant="contained" type="submit">
                Save Changes
              </Button>
              <Button variant="outlined" type="reset" color="secondary" onClick={handleReset}>
                Reset
              </Button>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  )
}
