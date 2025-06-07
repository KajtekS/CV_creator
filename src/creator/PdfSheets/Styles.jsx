import { StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    fontSize: 11,
    padding: 20,
  },
  leftColumn: {
    width: '35%',
    paddingRight: 10,
  },
  rightColumn: {
    width: '65%',
    paddingLeft: 10,
  },
  section: {
    marginBottom: 10,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  label: {
    fontWeight: 'bold',
    marginTop: 6,
  },
  listItem: {
    marginLeft: 10,
    marginBottom: 2,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
});

export default styles;