import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  Container,
  Paper,
  Typography,
  Box,
  Grid,
  Avatar,
  Button,
  AppBar,
  Toolbar,
  IconButton,
  CircularProgress,
  Divider,
} from '@mui/material';
import {
  ArrowBack as ArrowBackIcon,
  Edit as EditIcon,
  Email as EmailIcon,
  Work as WorkIcon,
  Business as BusinessIcon,
  AttachMoney as MoneyIcon,
  DateRange as DateIcon,
} from '@mui/icons-material';
import { useQuery } from '@tanstack/react-query';
import { employeeAPI } from '../api/employees';

export default function EmployeeDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: employee, isLoading, error } = useQuery({
    queryKey: ['employee', id],
    queryFn: () => employeeAPI.getById(id),
  });

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  if (isLoading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Paper sx={{ p: 4 }}>
          <Typography color="error">Error loading employee details</Typography>
          <Button onClick={() => navigate('/employees')} sx={{ mt: 2 }}>
            Back to Employee List
          </Button>
        </Paper>
      </Container>
    );
  }

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={() => navigate('/employees')}>
            <ArrowBackIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Employee Details
          </Typography>
          <Button
            color="inherit"
            startIcon={<EditIcon />}
            onClick={() => navigate(`/employees/edit/${id}`)}
          >
            Edit
          </Button>
        </Toolbar>
      </AppBar>

      <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
        <Paper elevation={3} sx={{ p: 4 }}>
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Avatar
              src={employee.profile_picture ? `http://localhost:3000${employee.profile_picture}` : ''}
              sx={{ width: 150, height: 150, margin: '0 auto', mb: 2 }}
            >
              {employee.first_name[0]}{employee.last_name[0]}
            </Avatar>
            <Typography variant="h4" gutterBottom>
              {employee.first_name} {employee.last_name}
            </Typography>
            <Typography variant="h6" color="text.secondary" gutterBottom>
              {employee.position}
            </Typography>
          </Box>

          <Divider sx={{ my: 3 }} />

          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <EmailIcon sx={{ mr: 2, color: 'primary.main' }} />
                <Box>
                  <Typography variant="caption" color="text.secondary">
                    Email Address
                  </Typography>
                  <Typography variant="body1">{employee.email}</Typography>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <WorkIcon sx={{ mr: 2, color: 'primary.main' }} />
                <Box>
                  <Typography variant="caption" color="text.secondary">
                    Position
                  </Typography>
                  <Typography variant="body1">{employee.position}</Typography>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <BusinessIcon sx={{ mr: 2, color: 'primary.main' }} />
                <Box>
                  <Typography variant="caption" color="text.secondary">
                    Department
                  </Typography>
                  <Typography variant="body1">{employee.department}</Typography>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <MoneyIcon sx={{ mr: 2, color: 'primary.main' }} />
                <Box>
                  <Typography variant="caption" color="text.secondary">
                    Salary
                  </Typography>
                  <Typography variant="body1">
                    ${employee.salary.toLocaleString()}
                  </Typography>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <DateIcon sx={{ mr: 2, color: 'primary.main' }} />
                <Box>
                  <Typography variant="caption" color="text.secondary">
                    Date of Joining
                  </Typography>
                  <Typography variant="body1">
                    {formatDate(employee.date_of_joining)}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>

          <Box sx={{ mt: 4, display: 'flex', gap: 2 }}>
            <Button
              fullWidth
              variant="outlined"
              onClick={() => navigate('/employees')}
            >
              Back to List
            </Button>
            <Button
              fullWidth
              variant="contained"
              startIcon={<EditIcon />}
              onClick={() => navigate(`/employees/edit/${id}`)}
            >
              Edit Employee
            </Button>
          </Box>
        </Paper>
      </Container>
    </>
  );
}
