'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
const CweManager_1 = require('../src/CweManager')
describe('Cwe Manager', () => {
  describe('Cwe Manager supports instantiation with custom data', () => {
    test('Cwe Manager instnatiated with custom hierarchy', () => {
      const cweManager = new CweManager_1.CweManager({
        cweHierarchy: [{ weaknessId: '31337', parentId: '31338' }]
      })
      const result = cweManager.isChildOf('31337', '31338')
      expect(result).toBe(true)
    })
    test.todo('Cwe Manager instnatiated with custom dictionary')
  })
  describe('Cwe Manager getters', () => {
    test.todo('Implement and test getByIds() with one id')
    test.todo('Implement and test getByIds() with multiple ids')
    test.todo('Implement and test getByIds() - what happens when no results?')
    test.todo('Implement and test getParents()')
    test.todo('Implement and test getChilds()')
  })
  describe('Testing CWE hierarchy', () => {
    test('A CWE ID that is a child of another CWE ID should return true', () => {
      const cweManager = new CweManager_1.CweManager()
      const result = cweManager.isChildOf('117', '116')
      expect(result).toBe(true)
    })
    test('A CWE ID that is not a child of another CWE ID should return false', () => {
      const cweManager = new CweManager_1.CweManager()
      const result = cweManager.isChildOf('117', '52')
      expect(result).toBe(false)
    })
    test('A CWE ID that is a child of an indirect CWE ID parent should return true', () => {
      const cweManager = new CweManager_1.CweManager()
      const result = cweManager.isChildOf('117', '707', { indirect: true })
      expect(result).toBe(true)
    })
    test('A CWE ID that is not a child of an indirect CWE ID parent should return false', () => {
      const cweManager = new CweManager_1.CweManager()
      const result = cweManager.isChildOf('117', '22', { indirect: true })
      expect(result).toBe(false)
    })
    test.todo(
      'A set of CWE IDs that are childs of another CWE ID should return true (one parent for all)'
    )
  })
  describe('Cwe Manager Memberships', () => {
    test('A CWE ID that has no memberships should return null', () => {
      const cweManager = new CweManager_1.CweManager()
      const result = cweManager.getMemberships('notfoundid')
      expect(result).toBe(null)
    })
    test('A CWE ID with memberships should return an array of ids', () => {
      const cweManager = new CweManager_1.CweManager()
      const result = cweManager.getMemberships('778')
      expect(result).toStrictEqual(['1009', '1036', '1210', '1308', '1355'])
    })
  })
})
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3dlTWFuYWdlci50ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vdGVzdC9Dd2VNYW5hZ2VyLnRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxrREFBNkM7QUFFN0MsUUFBUSxDQUFDLGFBQWEsRUFBRSxHQUFHLEVBQUU7SUFDM0IsUUFBUSxDQUFDLHFEQUFxRCxFQUFFLEdBQUcsRUFBRTtRQUNuRSxJQUFJLENBQUMsZ0RBQWdELEVBQUUsR0FBRyxFQUFFO1lBQzFELE1BQU0sVUFBVSxHQUFHLElBQUksdUJBQVUsQ0FBQztnQkFDaEMsWUFBWSxFQUFFLENBQUMsRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsQ0FBQzthQUMzRCxDQUFDLENBQUE7WUFDRixNQUFNLE1BQU0sR0FBRyxVQUFVLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQTtZQUNyRCxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQzNCLENBQUMsQ0FBQyxDQUFBO1FBRUYsSUFBSSxDQUFDLElBQUksQ0FBQyxpREFBaUQsQ0FBQyxDQUFBO0lBQzlELENBQUMsQ0FBQyxDQUFBO0lBRUYsUUFBUSxDQUFDLHFCQUFxQixFQUFFLEdBQUcsRUFBRTtRQUNuQyxJQUFJLENBQUMsSUFBSSxDQUFDLDJDQUEyQyxDQUFDLENBQUE7UUFDdEQsSUFBSSxDQUFDLElBQUksQ0FBQyxpREFBaUQsQ0FBQyxDQUFBO1FBQzVELElBQUksQ0FBQyxJQUFJLENBQUMsK0RBQStELENBQUMsQ0FBQTtRQUMxRSxJQUFJLENBQUMsSUFBSSxDQUFDLGlDQUFpQyxDQUFDLENBQUE7UUFDNUMsSUFBSSxDQUFDLElBQUksQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFBO0lBQzdDLENBQUMsQ0FBQyxDQUFBO0lBRUYsUUFBUSxDQUFDLHVCQUF1QixFQUFFLEdBQUcsRUFBRTtRQUNyQyxJQUFJLENBQUMsK0RBQStELEVBQUUsR0FBRyxFQUFFO1lBQ3pFLE1BQU0sVUFBVSxHQUFHLElBQUksdUJBQVUsRUFBRSxDQUFBO1lBQ25DLE1BQU0sTUFBTSxHQUFHLFVBQVUsQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFBO1lBQ2pELE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDM0IsQ0FBQyxDQUFDLENBQUE7UUFFRixJQUFJLENBQUMsb0VBQW9FLEVBQUUsR0FBRyxFQUFFO1lBQzlFLE1BQU0sVUFBVSxHQUFHLElBQUksdUJBQVUsRUFBRSxDQUFBO1lBQ25DLE1BQU0sTUFBTSxHQUFHLFVBQVUsQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFBO1lBQ2hELE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDNUIsQ0FBQyxDQUFDLENBQUE7UUFFRixJQUFJLENBQUMsMEVBQTBFLEVBQUUsR0FBRyxFQUFFO1lBQ3BGLE1BQU0sVUFBVSxHQUFHLElBQUksdUJBQVUsRUFBRSxDQUFBO1lBQ25DLE1BQU0sTUFBTSxHQUFHLFVBQVUsQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFBO1lBQ3JFLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDM0IsQ0FBQyxDQUFDLENBQUE7UUFFRixJQUFJLENBQUMsK0VBQStFLEVBQUUsR0FBRyxFQUFFO1lBQ3pGLE1BQU0sVUFBVSxHQUFHLElBQUksdUJBQVUsRUFBRSxDQUFBO1lBQ25DLE1BQU0sTUFBTSxHQUFHLFVBQVUsQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFBO1lBQ3BFLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDNUIsQ0FBQyxDQUFDLENBQUE7UUFFRixJQUFJLENBQUMsSUFBSSxDQUNQLDRGQUE0RixDQUM3RixDQUFBO0lBQ0gsQ0FBQyxDQUFDLENBQUE7SUFFRixRQUFRLENBQUMseUJBQXlCLEVBQUUsR0FBRyxFQUFFO1FBQ3ZDLElBQUksQ0FBQyxxREFBcUQsRUFBRSxHQUFHLEVBQUU7WUFDL0QsTUFBTSxVQUFVLEdBQUcsSUFBSSx1QkFBVSxFQUFFLENBQUE7WUFDbkMsTUFBTSxNQUFNLEdBQUcsVUFBVSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQTtZQUN0RCxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQzNCLENBQUMsQ0FBQyxDQUFBO1FBRUYsSUFBSSxDQUFDLHlEQUF5RCxFQUFFLEdBQUcsRUFBRTtZQUNuRSxNQUFNLFVBQVUsR0FBRyxJQUFJLHVCQUFVLEVBQUUsQ0FBQTtZQUNuQyxNQUFNLE1BQU0sR0FBRyxVQUFVLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFBO1lBQy9DLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQTtRQUN4RSxDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUMsQ0FBQyxDQUFBO0FBQ0osQ0FBQyxDQUFDLENBQUEifQ==
