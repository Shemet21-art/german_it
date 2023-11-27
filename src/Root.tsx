import { Route, Routes } from "react-router-dom";
import {
  Main,
  Meetups,
  CommonProjects,
  Meetup,
  Contacts,
  Impressum,
  Vacancies,
  Vacancy,
} from "pages";
import MapPage from "pages/MapPage/MapPage";
import Layout from "common/components/Layouts/Layout";
import LayoutWithoutFooter from "common/components/Layouts/LayoutWithoutFooter";

function Root() {
  return (
    <Routes>
      <Route element={<LayoutWithoutFooter />}>
        <Route path="map" element={<MapPage />} />
      </Route>

      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="meetups" element={<Meetups />} />
        <Route path="meetups/:meetupId" element={<Meetup />} />
        <Route path="common-projects" element={<CommonProjects />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="impressum" element={<Impressum />} />
        <Route path="vacancies" element={<Vacancies />} />
        <Route path="vacancies/:vacancyId" element={<Vacancy />} />
      </Route>
    </Routes>
  );
}

export default Root;
