import { Page, Text, View, Document, StyleSheet, Font } from "@react-pdf/renderer";
import { PersonalDetailsPdf } from "./PersonalDetailsPdf";
import { SkillsDetailsPdf } from "./SkillsDetailsPdf";
import { WorkExperiencePdf } from "./WorkExperiencePdf";
import FiraSansRegular from "../../assets/fonts/FiraSans-Regular.ttf";

// Prevents hyphening words that break
Font.registerHyphenationCallback((word) => [word]);

Font.register({
  family: "fira_sansregular",
  src: FiraSansRegular
});

const styles = StyleSheet.create({
  page: {
    fontSize: '12pt',
    lineHeight: 1.15,
    padding: '0.75in',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    gap: '24px',
    fontFamily: "fira_sansregular",
    textOverflow: 'none',
  },
  detailColumn: {
    flexDirection: 'column',
    flexWrap: 'nowrap',
    gap: '24px',
  }
})

export function ResumePdfDocument({resume}) {
  return (
    <Document>
      <Page size="LETTER" style={styles.page}>
        <View style={[{ flex: 1, minWidth: 0,}, styles.detailColumn]}>
          <PersonalDetailsPdf 
            name={resume.name}
            email={resume.email}
            number={resume.number}
            summary={resume.summary}
          />
          <SkillsDetailsPdf 
            skillsArray={resume.skills}
          />
        </View>

        <View style={[{ flex: 2 }, styles.detailColumn]}>
          <WorkExperiencePdf workExperienceArray={resume.workExperience}/>
        </View>
      </Page>
    </Document>
  )
}