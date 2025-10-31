import { Navigate, Route, Routes } from 'react-router-dom';
import { Navbar } from '../../ui';
import { DcPage, HeroPage, MarvelPage, SearchPage, AsociacionesPage} from '../pages';

export const HeroesRoutes = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <Routes>
                    <Route path="marvel" element={<MarvelPage />} />
                    <Route path="dc" element={<DcPage />} />
                    <Route path="search" element={<SearchPage />} />
                    <Route path="hero/:id" element={<HeroPage />} />
                    <Route path="/asociaciones" element={<AsociacionesPage />} />

                    <Route path="/" element={<Navigate to="/asociaciones" />} />
                </Routes>
            </div>
        </>
    )
}
