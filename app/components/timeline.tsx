import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import SchoolIcon from "@mui/icons-material/School";
import DomainIcon from "@mui/icons-material/Domain";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import BusinessIcon from "@mui/icons-material/Business";
export default function CTimeline() {
  return (
    <section id="timeline" style={{ zIndex: 10 }}>
      <h1 className="text-6xl text-center font-extrabold my-16">Timeline </h1>
      <Timeline position="alternate">
        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector />

            <TimelineDot color="primary">
              <SchoolIcon></SchoolIcon>
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "32px", px: 2 }}>
            <Typography variant="h6" component="span">
              Graduation
            </Typography>
            <Typography> BE in Computer Engineering</Typography>
            <Typography>
              Trinity Academy of Engineering{" "}
            </Typography>
            <Typography> SPPU University, Pune</Typography>
            <Typography>Percentage: 81%</Typography>
            <Typography>(2021-2025)</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector />

            <TimelineDot color="primary" variant="outlined">
              <LocationCityIcon />
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "16px", px: 2 }}>
            <Typography variant="h6" component="span">
              Higher Secondary
            </Typography>
            <Typography>Lions English School , CBSE Board</Typography>
            {/* <Typography>CBSE Board</Typography> */}
            <Typography>Percentage: 79.53%</Typography>
            <Typography>(2020-2021)</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: "secondary.main" }} />

            <TimelineDot color="secondary">
              <DomainIcon></DomainIcon>
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "32px", px: 2 }}>
            <Typography variant="h6" component="span">
              Senior Secondary
            </Typography>
            <Typography>Lions English School, CBSE Board</Typography>
            {/* <Typography>CBSE Board</Typography> */}
            <Typography>Percentage: 90%</Typography>
            <Typography>(2018-2019)</Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </section>
  );
}
