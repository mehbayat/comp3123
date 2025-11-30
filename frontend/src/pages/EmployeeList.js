import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Typography,
  Box,
  IconButton,
  TextField,
  Grid,
  AppBar,
  Toolbar,
  Avatar,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Alert,
} from '@mui/material';
import {
  Add as AddIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  Visibility as ViewIcon,
  Logout as LogoutIcon,
  Search as SearchIcon,
  Clear as ClearIcon,
} from '@mui/icons-material';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { employeeAPI } from '../api/employees';
import { useAuth } from '../context/AuthContext';

export default function EmployeeList() {
  const navigate = useNavigate();
  const { logout, user } = useAuth();
  const queryClient = useQueryClient();
  const [searchParams, setSearchParams] = useState({ department: '', position: '' });
  const [isSearching, setIsSearching] = useState(false);
  const [deleteDialog, setDeleteDialog] = useState({ open: false, employee: null });
  const [error, setError] = useState('');

  const { data: employees, isLoading, refetch } = useQuery({
    queryKey: ['employees'],
    queryFn: employeeAPI.getAll,
  });

  const deleteMutation = useMutation({
    mutationFn: employeeAPI.delete,
    onSuccess: () => {
      queryClient.invalidateQueries(['employees']);
      setDeleteDialog({ open: false, employee: null });
    },
    onError: (error) => {
      setError(error.response?.data?.message || 'Failed to delete employee');
    },
  });

  const searchMutation = useMutation({
    mutationFn: employeeAPI.search,
    onSuccess: (data) => {
      queryClient.setQueryData(['employees'], data);
    },
    onError: (error) => {
      setError(error.response?.data?.message || 'Search failed');
    },
  });

  const handleSearch = () => {
    if (!searchParams.department && !searchParams.position) {
      setError('Please enter at least one search criterion');
      return;
    }
    setError('');
    setIsSearching(true);
    searchMutation.mutate(searchParams);
  };

  const handleClearSearch = () => {
    setSearchParams({ department: '', position: '' });
    setIsSearching(false);
    setError('');
    refetch();
  };

  const handleDelete = (employee) => {
    setDeleteDialog({ open: true, employee });
  };

  const confirmDelete = () => {
    deleteMutation.mutate(deleteDialog.employee.employee_id);
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString();
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Employee Management System
          </Typography>
          <Typography variant="body1" sx={{ mr: 2 }}>
            {user?.email || user?.username}
          </Typography>
          <Button color="inherit" onClick={handleLogout} startIcon={<LogoutIcon />}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Box sx={{ mb: 3 }}>
          <Typography variant="h4" gutterBottom>
            Employee List
          </Typography>

          {error && (
            <Alert severity="error" sx={{ mb: 2 }} onClose={() => setError('')}>
              {error}
            </Alert>
          )}

          <Paper elevation={2} sx={{ p: 2, mb: 2 }}>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} sm={4}>
                <TextField
                  fullWidth
                  label="Search by Department"
                  value={searchParams.department}
                  onChange={(e) => setSearchParams({ ...searchParams, department: e.target.value })}
                  size="small"
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  fullWidth
                  label="Search by Position"
                  value={searchParams.position}
                  onChange={(e) => setSearchParams({ ...searchParams, position: e.target.value })}
                  size="small"
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Box sx={{ display: 'flex', gap: 1 }}>
                  <Button
                    variant="contained"
                    onClick={handleSearch}
                    startIcon={<SearchIcon />}
                    fullWidth
                    disabled={searchMutation.isPending}
                  >
                    Search
                  </Button>
                  {isSearching && (
                    <Button
                      variant="outlined"
                      onClick={handleClearSearch}
                      startIcon={<ClearIcon />}
                      fullWidth
                    >
                      Clear
                    </Button>
                  )}
                </Box>
              </Grid>
            </Grid>
          </Paper>

          <Button
            variant="contained"
            color="primary"
            startIcon={<AddIcon />}
            onClick={() => navigate('/employees/add')}
          >
            Add New Employee
          </Button>
        </Box>

        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow sx={{ bgcolor: 'primary.main' }}>
                <TableCell sx={{ color: 'white' }}>Photo</TableCell>
                <TableCell sx={{ color: 'white' }}>Name</TableCell>
                <TableCell sx={{ color: 'white' }}>Email</TableCell>
                <TableCell sx={{ color: 'white' }}>Position</TableCell>
                <TableCell sx={{ color: 'white' }}>Department</TableCell>
                <TableCell sx={{ color: 'white' }}>Salary</TableCell>
                <TableCell sx={{ color: 'white' }}>Date Joined</TableCell>
                <TableCell sx={{ color: 'white' }} align="center">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {isLoading ? (
                <TableRow>
                  <TableCell colSpan={8} align="center">
                    Loading employees...
                  </TableCell>
                </TableRow>
              ) : employees && employees.length > 0 ? (
                employees.map((employee) => (
                  <TableRow key={employee.employee_id} hover>
                    <TableCell>
                      <Avatar
                        src={employee.profile_picture ? `http://localhost:3000${employee.profile_picture}` : ''}
                        alt={`${employee.first_name} ${employee.last_name}`}
                      >
                        {employee.first_name[0]}{employee.last_name[0]}
                      </Avatar>
                    </TableCell>
                    <TableCell>{`${employee.first_name} ${employee.last_name}`}</TableCell>
                    <TableCell>{employee.email}</TableCell>
                    <TableCell>{employee.position}</TableCell>
                    <TableCell>{employee.department}</TableCell>
                    <TableCell>${employee.salary.toLocaleString()}</TableCell>
                    <TableCell>{formatDate(employee.date_of_joining)}</TableCell>
                    <TableCell align="center">
                      <IconButton
                        color="primary"
                        onClick={() => navigate(`/employees/${employee.employee_id}`)}
                        title="View Details"
                      >
                        <ViewIcon />
                      </IconButton>
                      <IconButton
                        color="info"
                        onClick={() => navigate(`/employees/edit/${employee.employee_id}`)}
                        title="Edit"
                      >
                        <EditIcon />
                      </IconButton>
                      <IconButton
                        color="error"
                        onClick={() => handleDelete(employee)}
                        title="Delete"
                      >
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={8} align="center">
                    No employees found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>

      <Dialog open={deleteDialog.open} onClose={() => setDeleteDialog({ open: false, employee: null })}>
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete {deleteDialog.employee?.first_name} {deleteDialog.employee?.last_name}?
            This action cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteDialog({ open: false, employee: null })}>Cancel</Button>
          <Button onClick={confirmDelete} color="error" variant="contained" disabled={deleteMutation.isPending}>
            {deleteMutation.isPending ? 'Deleting...' : 'Delete'}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
