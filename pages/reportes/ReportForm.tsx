"use client";

import React, { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";

export default function ReportForm() {
  const [formData, setFormData] = useState({
    celula: "",
    date: "",
    leader: "",
    assistant: "",
    host: "",
    miembrosB: "",
    damas: "",
    mens: "",
    jovenes: "",
    address: "",
    // Nuevos grupos de campos
    miembrosAsistentes: "",
    miembrosAsistentesC: "",
    miembrosFaltantes: "",
    padresEspirituales: "",
    amigosContactados: "",
    amigosFiesta: "",
    amigosEncuentro: "",
    amigosBautizados: "",
    etapaECO1: "",
    etapaECO2: "",
    escuelaFormativa: "",
    escuelaPadresEspirituales: "",
    escuelaLideresCelulares: "",
    escuelaSupervisores: "",
    miembrosConPrivilegios: "",
    amigosAsistentes: "",
    conversiones: "",
    niños: "",
    ofrendas: "",
    serie: "",
    serie2: "",
    serie3: "",
    observaciones: "",
    miembros: "",
    visitas: "",
  });

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | SelectChangeEvent
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleReset = () => {
    setFormData({
      celula: "",
      date: "",
      leader: "",
      assistant: "",
      host: "",
      miembrosB: "",
      damas: "",
      mens: "",
      jovenes: "",
      address: "",
      serie: "",
      serie2: "",
      serie3: "",
      miembrosAsistentes: "",
      miembrosAsistentesC: "",
      miembrosFaltantes: "",
      padresEspirituales: "",
      amigosContactados: "",
      amigosFiesta: "",
      amigosEncuentro: "",
      amigosBautizados: "",
      etapaECO1: "",
      etapaECO2: "",
      escuelaFormativa: "",
      escuelaPadresEspirituales: "",
      escuelaLideresCelulares: "",
      escuelaSupervisores: "",
      miembrosConPrivilegios: "",
      amigosAsistentes: "",
      conversiones: "",
      niños: "",
      ofrendas: "",
      observaciones: "",
      miembros: "",
      visitas: "",
    });
  };

  return (
    <Card>
      <h1 className="font-bold text-center mt-4">REPORTE DE CÉLULA SEMANAL</h1>
      <CardContent>
        <form onSubmit={(e) => e.preventDefault()}>
          <Grid container spacing={4}>
            {/* --- DATOS GENERALES --- */}
            <Grid size={{ xs: 12, sm: 6 }}>
              <FormControl fullWidth>
                <InputLabel>Célula #</InputLabel>
                <Select
                  label="Célula"
                  value={formData.celula}
                  name="celula"
                  onChange={handleChange}
                >
                  <MenuItem value="1">1</MenuItem>
                  <MenuItem value="2">2</MenuItem>
                  <MenuItem value="3">3</MenuItem>
                  <MenuItem value="4">4</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                name="date"
                label="Fecha"
                type="date"
                value={formData.date}
                onChange={handleChange}
                slotProps={{ inputLabel: { shrink: true } }}
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                label="Líder"
                name="leader"
                value={formData.leader}
                onChange={handleChange}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                label="Asistente"
                name="assistant"
                value={formData.assistant}
                onChange={handleChange}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                label="Anfitrión"
                name="host"
                value={formData.host}
                onChange={handleChange}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                label="Dirección"
                name="address"
                value={formData.address}
                onChange={handleChange}
              />
            </Grid>

            {/* --- PLANEACIÓN --- */}
            <Grid size={{ xs: 12, sm: 6 }}>
              <Typography variant="h6">PLANEACIÓN</Typography>
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                label="Miembros Asistentes"
                name="miembrosAsistentes"
                type="number"
                value={formData.miembrosAsistentes}
                onChange={handleChange}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                label="Miembros Faltantes"
                name="miembrosFaltantes"
                type="number"
                value={formData.miembrosFaltantes}
                onChange={handleChange}
              />
            </Grid>
            {/* --- ALCANCE --- */}
            <Grid size={{ xs: 12, sm: 6 }}>
              <Typography variant="h6">ALCANCE</Typography>
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                label="Miembros Asistentes"
                name="miembrosAsistentesC"
                type="number"
                value={formData.miembrosAsistentesC}
                onChange={handleChange}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                label="Miembros con Privilegios"
                name="miembrosConPrivilegios"
                type="number"
                value={formData.miembrosConPrivilegios}
                onChange={handleChange}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                label="Amigos Asistentes"
                name="amigosAsistentes"
                type="number"
                value={formData.amigosAsistentes}
                onChange={handleChange}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                label="Conversiones"
                name="conversiones"
                type="number"
                value={formData.conversiones}
                onChange={handleChange}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                label="Niños"
                name="niños"
                type="number"
                value={formData.niños}
                onChange={handleChange}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                label="Ofrendas ($)"
                name="ofrendas"
                type="number"
                value={formData.ofrendas}
                onChange={handleChange}
              />
            </Grid>

            {/* --- PROCESO DE GANAR --- */}
            <Grid size={{ xs: 12, sm: 6 }}>
              <Typography variant="h6">PROCESO DE GANAR</Typography>
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                label="Padres Espirituales"
                name="padresEspirituales"
                type="number"
                value={formData.padresEspirituales}
                onChange={handleChange}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                label="Amigos Contactados"
                name="amigosContactados"
                type="number"
                value={formData.amigosContactados}
                onChange={handleChange}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                label="Amigos a la Fiesta"
                name="amigosFiesta"
                type="number"
                value={formData.amigosFiesta}
                onChange={handleChange}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                label="Amigos a Encuentro"
                name="amigosEncuentro"
                type="number"
                value={formData.amigosEncuentro}
                onChange={handleChange}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                label="Amigos Bautizados"
                name="amigosBautizados"
                type="number"
                value={formData.amigosBautizados}
                onChange={handleChange}
              />
            </Grid>

            {/* --- PROCESO DE AFIRMAR --- */}
            <Grid size={{ xs: 12, sm: 6 }}>
              <Typography variant="h6">PROCESO DE AFIRMAR</Typography>
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                label="Etapa ECO 1"
                name="etapaECO1"
                type="number"
                value={formData.etapaECO1}
                onChange={handleChange}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                label="Etapa ECO 2"
                name="etapaECO2"
                type="number"
                value={formData.etapaECO2}
                onChange={handleChange}
              />
            </Grid>

            {/* --- ESCUELA VISIÓN ESVI --- */}
            <Grid size={{ xs: 12, sm: 6 }}>
              <Typography variant="h6">ESCUELA VISIÓN ESVI</Typography>
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                label="Escuela Formativa"
                name="escuelaFormativa"
                type="number"
                value={formData.escuelaFormativa}
                onChange={handleChange}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                label="Escuela Padres Espirituales"
                name="escuelaPadresEspirituales"
                type="number"
                value={formData.escuelaPadresEspirituales}
                onChange={handleChange}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                label="Escuela Líderes Celulares"
                name="escuelaLideresCelulares"
                type="number"
                value={formData.escuelaLideresCelulares}
                onChange={handleChange}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                label="Escuela Supervisores"
                name="escuelaSupervisores"
                type="number"
                value={formData.escuelaSupervisores}
                onChange={handleChange}
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 6 }}>
              <Typography variant="h6">Bautismos</Typography>
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                label="Serie 1"
                name="serie"
                type="number"
                value={formData.serie}
                onChange={handleChange}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                label="Serie 2"
                name="serie2"
                type="number"
                value={formData.serie2}
                onChange={handleChange}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                label="Serie 3"
                name="serie3"
                type="number"
                value={formData.serie3}
                onChange={handleChange}
              />
            </Grid>

            {/* --- MIEMBROS Y VISITAS --- */}
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                multiline
                rows={3}
                label="Miembros"
                name="miembros"
                value={formData.miembros}
                onChange={handleChange}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                multiline
                rows={3}
                label="Visitas"
                name="visitas"
                value={formData.visitas}
                onChange={handleChange}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <Typography variant="h6">OBSERVACIONES</Typography>
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                multiline
                rows={3}
                name="observaciones"
                value={formData.observaciones}
                onChange={handleChange}
                placeholder="Escriba las observaciones de la célula..."
              />
            </Grid>
            {/* --- BOTONES --- */}
            <Grid size={{ xs: 12 }} className="flex gap-4 flex-wrap">
              <Button variant="contained" type="submit">
                Guardar Reporte
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                onClick={handleReset}
              >
                Limpiar
              </Button>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  );
}
