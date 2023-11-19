import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import * as yup from 'yup'
import { _WebsiteService } from '../services/website/website.query.service'

const websiteFormSchema = yup
  .object({
    name: yup.string().required().label('Name'),
    description: yup.string().required().label('Description'),
    target_user: yup.string().required().label('Target User'),
  })
  .required()

type WebsiteFormValues = yup.InferType<typeof websiteFormSchema>

export default function WebsiteForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<WebsiteFormValues>({
    resolver: yupResolver(websiteFormSchema),
  })

  const navigate = useNavigate()

  const { mutate: generateWebsite, isLoading } = _WebsiteService
    .genrateWebsite()
    .useMutation({
      onSuccess: () => {
        navigate('/website')
      },
    })

  const onSubmit = (data: WebsiteFormValues) => {
    generateWebsite(data)
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Make your website
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          sx={{ mt: 1 }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Website Name"
            {...register('name')}
            helperText={errors.name?.message ?? 'Enter the website name'}
            error={!!errors.name?.message}
            autoComplete="name"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Description"
            type="text"
            id="description"
            {...register('description')}
            helperText={
              errors.description?.message ?? 'Enter website description'
            }
            error={!!errors.description?.message}
            autoComplete="current-description"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Target User"
            type="text"
            id="target_user"
            {...register('target_user')}
            helperText={
              errors.target_user?.message ?? 'Enter website target user'
            }
            error={!!errors.target_user?.message}
            autoComplete="current-target_user"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            disabled={isLoading}
            sx={{ mt: 3, mb: 2 }}
          >
            {isLoading ? 'Loading...' : 'Generate'}
          </Button>
        </Box>
      </Box>
    </Container>
  )
}
