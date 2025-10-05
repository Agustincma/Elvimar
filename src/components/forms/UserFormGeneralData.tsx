import React, { useState } from 'react';
import {
  Box,
  TextField,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Checkbox,
  FormControlLabel,
  Button,
  Grid,
  Typography,
} from '@mui/material';
import { GeneralClientData } from '../../types/GeneralClient.types';

// 🔹 Opciones simuladas (ajustá según tus enums reales)
const clientTypes = ['Individual', 'Company'];
const residencyStatuses = ['Resident', 'Non-Resident'];
const maritalStatuses = ['Single', 'Married', 'Divorced', 'Widowed'];

export const UserFormGeneralData: React.FC = () => {
  const [formData, setFormData] = useState<GeneralClientData>({
    clientType: 'Individual',
    firstName: '',
    lastName: '',
    companyName: '',
    ssn: '',
    identificationNumber: '',
    address: '',
    residencyStatus: 'Resident',
    email: '',
    phone: '',
    birthDate: '',
    incorporationDate: '',
    maritalStatus: 'Single',
    hasDisability: false,
    clientFlag: '',
    label: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (e: React.ChangeEvent<{ name?: string; value: unknown }>) => {
    const { name, value } = e.target;
    if (name) setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitted:', formData);
  };

  return (
    <Box sx={{ maxWidth: 700, margin: 'auto', mt: 4, p: 3,borderRadius: '28px' }}>
      <Typography variant="h5" mb={2}>
        General Client Information
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>

          {/* Client Type */}
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Client Type</InputLabel>
              <Select
                name="clientType"
                value={formData.clientType}
                label="Client Type"
                onChange={handleSelectChange}
              >
                {clientTypes.map(type => (
                  <MenuItem key={type} value={type}>
                    {type}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          {/* First & Last Name */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </Grid>

          {/* Company Name (optional) */}
          {formData.clientType === 'Company' && (
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Company Name"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
              />
            </Grid>
          )}

          {/* SSN / Identification */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="SSN"
              name="ssn"
              value={formData.ssn}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Identification Number"
              name="identificationNumber"
              value={formData.identificationNumber}
              onChange={handleChange}
            />
          </Grid>

          {/* Address */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Address"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
          </Grid>

          {/* Residency Status */}
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Residency Status</InputLabel>
              <Select
                name="residencyStatus"
                value={formData.residencyStatus}
                label="Residency Status"
                onChange={handleSelectChange}
              >
                {residencyStatuses.map(status => (
                  <MenuItem key={status} value={status}>
                    {status}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          {/* Email & Phone */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </Grid>

          {/* Dates */}
          {formData.clientType === 'Individual' && (
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Birth Date"
                name="birthDate"
                type="date"
                value={formData.birthDate}
                onChange={handleChange}
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
          )}
          {formData.clientType === 'Company' && (
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Incorporation Date"
                name="incorporationDate"
                type="date"
                value={formData.incorporationDate}
                onChange={handleChange}
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
          )}

          {/* Marital Status */}
          {formData.clientType === 'Individual' && (
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Marital Status</InputLabel>
                <Select
                  name="maritalStatus"
                  value={formData.maritalStatus}
                  label="Marital Status"
                  onChange={handleSelectChange}
                >
                  {maritalStatuses.map(status => (
                    <MenuItem key={status} value={status}>
                      {status}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          )}

          {/* Disability */}
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox
                  name="hasDisability"
                  checked={formData.hasDisability || false}
                  onChange={handleCheckboxChange}
                />
              }
              label="Has Disability"
            />
          </Grid>

          {/* Client Flag & Label */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Client Flag"
              name="clientFlag"
              value={formData.clientFlag}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Label"
              name="label"
              value={formData.label}
              onChange={handleChange}
            />
          </Grid>

          {/* Submit Button */}
          <Grid item xs={12}>
            <Button type="submit" variant="contained" fullWidth>
              Submit
            </Button>
          </Grid>

        </Grid>
      </form>
    </Box>
  );
};

export default UserFormGeneralData;
