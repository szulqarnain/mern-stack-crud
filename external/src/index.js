import React from 'react';
import ReactDOM from 'react-dom/client';

// Styling
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
// Import Component
import App from './App';

//Providers
import { AuthProvider } from './context/auth/context';
import { CategoryProvider } from './context/categories/context';
import { CarsProvider } from './context/cars/context';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <AuthProvider>
        <CategoryProvider>
            <CarsProvider>
                <App />
            </CarsProvider>
        </CategoryProvider>
    </AuthProvider>
);
