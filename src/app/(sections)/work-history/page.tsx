import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";
import Template from "../template";

const description = <></>;

export default function WorkHistory() {
  return (
    <Template title="Work History" description={description}>
      <div style={{ maxWidth: 1000, margin: "auto", marginBottom: 30 }}>
        <div style={{ marginBottom: 15 }}>
          <Card
            sx={{ display: "flex", justifyContent: "flex-start", padding: 2 }}
          >
            <div>
              <CardMedia
                component="img"
                sx={{ width: 151, m: 2 }}
                image="/dbs_logo.jpg"
                alt="Daugherty Business Solutions"
              />
              <CardHeader
                title={
                  <Typography variant="subtitle1">Senior Consultant</Typography>
                }
                subheader={
                  <Typography variant="subtitle2">
                    Aug 2023 - Present
                  </Typography>
                }
                sx={{ paddingTop: 1, paddingBottom: 1 }}
                disableTypography
              />
              <CardHeader
                title={<Typography variant="subtitle1">Consultant</Typography>}
                subheader={
                  <Typography variant="subtitle2">
                    May 2022 - Aug 2023
                  </Typography>
                }
                sx={{ paddingTop: 1, paddingBottom: 1 }}
                disableTypography
              />
            </div>
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                marginLeft: 4,
              }}
            >
              <Typography variant="h6">Client: Best Buy</Typography>
              <ul>
                <li>
                  <Typography>
                    Created omnichannel communications platform for use by 7000+
                    Best Buy employees and 3rd party vendors to interact with
                    customers via chat, voice, video chat, Apple Business
                    messages, and SMS; consolidating agents from multiple
                    platforms into one centrally managed application
                  </Typography>
                </li>
                <li>
                  <Typography>
                    Developed a strategy for using plugin architecture to
                    optimize separation of concerns, reusability, and
                    development efficiency
                  </Typography>
                </li>
                <li>
                  <Typography>
                    Designed and implemented a automated deployment solution
                    using GitHub Actions that managed testing, scanning,
                    building, versioning, and deploying our applications
                  </Typography>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
        <div style={{ marginBottom: 15 }}>
          <Card
            sx={{ display: "flex", justifyContent: "flex-start", padding: 2 }}
          >
            <div>
              <CardMedia
                component="img"
                sx={{ width: 151, m: 2 }}
                image="/frp_logo.jpg"
                alt="Fitness Plus Equipment Services"
              />
              <CardHeader
                title={<Typography variant="subtitle1">IT Manager</Typography>}
                subheader={
                  <Typography variant="subtitle2">
                    Jun 2019 - May 2022
                  </Typography>
                }
                disableTypography
                sx={{ paddingTop: 1, paddingBottom: 1 }}
              />
              <CardHeader
                title={
                  <Typography variant="subtitle1">Web Developer</Typography>
                }
                subheader={
                  <Typography variant="subtitle2">
                    Aug 2017 - Jun 2019
                  </Typography>
                }
                sx={{ paddingTop: 1, paddingBottom: 1 }}
                disableTypography
              />
            </div>
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                marginLeft: 4,
              }}
            >
              <ul>
                <li>
                  <Typography>
                    Maintained an industry leading fitness equipment e-commerce
                    website
                  </Typography>
                </li>
                <li>
                  <Typography>
                    Built tools and reporting for internal use by warehouse,
                    accounting, marketing, and customer service departments
                  </Typography>
                </li>
                <li>
                  <Typography>
                    Acted on feedback from both internal users and customers
                  </Typography>
                </li>
                <li>
                  <Typography>
                    Collaborated with a small team using the scrum agile
                    methodology
                  </Typography>
                </li>
                <li>
                  <Typography>
                    Took full ownership of projects during the entire project
                    management life-cycle
                  </Typography>
                </li>
                <li>
                  <Typography>
                    Effectively trained and supervised an intern
                  </Typography>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </Template>
  );
}
